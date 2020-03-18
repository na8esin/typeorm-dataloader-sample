# Awesome Project Build with TypeORM

グローバルにはインストールしたくないので、`npm install typeorm`してから

`npx typeorm init --name typeorm-dataloader-mysql-sample --database mysql`

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

# 軽い問題
## DataLoaderが読み込めなくなった
`import * as DataLoader from 'dataloader';`で読み込めなくなった

エラー内容
````
Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead.
```

- 2.0.0になったせいか?
- もしくは下記をtsconfig.jsonに追加したせいか？
```
"moduleResolution": "Node",
"esModuleInterop": true
```

### 解決策
`import DataLoader from 'dataloader';`