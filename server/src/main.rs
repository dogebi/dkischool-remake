// 학교 홈페이지 재현용 정적 파일과 상태 API를 제공합니다.
use axum::{routing::get, Json, Router};
use serde::Serialize;
use std::{env, path::PathBuf};
use tower_http::services::{ServeDir, ServeFile};

#[derive(Serialize)]
struct Health { status: &'static str, service: &'static str }

async fn health() -> Json<Health> {
    Json(Health { status: "ok", service: "dkischool-remake" })
}

#[tokio::main]
async fn main() {
    let static_dir = env::var_os("STATIC_DIR").map(PathBuf::from).unwrap_or_else(|| {
        let local = PathBuf::from("frontend/dist");
        if local.exists() { local } else { PathBuf::from("../frontend/dist") }
    });
    let index = static_dir.join("index.html");
    let app = Router::new()
        .route("/api/health", get(health))
        .fallback_service(ServeDir::new(static_dir).append_index_html_on_directories(true).not_found_service(ServeFile::new(index)));
    let addr = env::var("BIND_ADDR").unwrap_or_else(|_| "127.0.0.1:3000".into());
    let listener = tokio::net::TcpListener::bind(&addr).await.expect("bind Axum listener");
    println!("Axum listening on http://{addr}");
    axum::serve(listener, app).await.expect("serve Axum app");
}
