# task_manager
タスク管理用のアプリ

## 基本的な機能
- タスクの追加
- タスクの完了マーク
- タスクの削除
- タスクのリスト表示

## node環境
`Node.js`のバージョンは`v20.18.0`
一旦dockerなしで開発を進める


## ディレクトリ構成

```
task_manager/
├── backend/                # バックエンド（APIサーバー）
│   ├── src/                # バックエンドコード（Flask, Django, etc.）
│   ├── Dockerfile          # バックエンド用のDockerfile
│   ├── requirements.txt    # 必要なPythonパッケージ
│   └── config/             # 環境設定（DB接続設定等）
│
├── frontend/               # Webアプリ（React）
│   ├── src/                # フロントエンドコード（UI、Reactコンポーネント）
│   │   ├── components/     # 各コンポーネント
│   │   ├── hooks/          # ロジックに関する部分（タスクの管理や操作）
│   │   ├── styles/         # アプリのスタイル（共通スタイルなど）
│   │   └── App.tsx         # アプリケーションのエントリーポイント
│   ├── public/             # 静的ファイル（HTML, CSS）
│   ├── Dockerfile          # フロントエンド用のDockerfile
│   ├── package.json        # フロントエンドの依存関係（npm/yarn用）
│   └── config/             # フロントエンド設定
│
├── mobile/                 # モバイルアプリ（React Native）
│   ├── src/                # モバイルアプリコード（React Native）
│   ├── package.json        # モバイルアプリの依存関係（npm/yarn用）
│   └── config/             # モバイル設定
│
├── docker-compose.yml      # 複数コンテナを管理するための設定
└── README.md               # プロジェクト全体の概要
```

## コンポーネント設計
default exportは基本使用しない（import側で自由に名前をつけることができるため）

Buttonというコンポーネントの場合以下のような構成で設計する

```
Button/
├── index.tsx  # Buttonをexportするためだけのファイル
├── types.ts  # Buttonコンポーネントに関連する型定義を含むファイル
├── styles.ts  # Buttonコンポーネントのスタイルを定義するファイル
├── Button.tsx  # 見た目に関する部分
├── Button.stories.tsx  # Storybookで表示するためのファイル
├── hooks.ts  # ロジックに関する部分
|── components/
│   ├── SubComponentA/
│   ├── SubComponentB/
```


## ブランチ戦略
ブランチ名は以下のように命名する

| ブランチ名 | 用途 | 命名規則例 |
|------------------|----------------------------------------------------------------------|---------------------|
| main | 安定したバージョンを保持。完成した機能や修正をマージ。 | main |
| feature/xxx | 新しい機能の開発に使用。xxxは機能の名前を示す。 | feature/add-feature |
| bugfix/xxx | バグ修正に使用。xxxは修正内容を示す。 | bugfix/fix-issue |
| refactor/xxx | コードのリファクタリングに使用。xxxはリファクタリングの内容を示す。 | refactor/improve-component-structure |

## コミットメッセージのルール
以下のタグを使用する

| タグ | 用途 | 例 |
|--------|----------------------------------|------------------------------------|
| feature | 新しい機能の追加 | [feature]画像認識モデルを追加 |
| bugfix | バグ修正 | [bugfix]データ読み込みエラーを修正 |
| docs | ドキュメントの変更 | [docs]READMEに使用方法を追加 |
| refactor | コードのリファクタリング（動作に影響しない） | [refactor]モデルの構造を整理 |
| chore | その他の変更（パッケージ更新、ビルドプロセスの変更など） | [chore]依存パッケージを更新 |
