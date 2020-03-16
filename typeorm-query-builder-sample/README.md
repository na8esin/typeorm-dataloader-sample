# typescript sample

DB での取得結果を graphql の型にどうマッピングしていいか迷ったとき作ったサンプル

得意分野テーブルとユーザを紐づけるためのマッピングテーブルがあり、
ユーザテーブル自体は結合する必要がない状態のとき、上記二つを結合して、
結果をグルーピングしたい

graphql のレスポンスの例

```
user {
    userId:1
    expertise {
        id:1
        name:'スポーツ'
    }
}
```

graphql はその性質上、user を単体で検索してから、その下の階層を検索するので、ユーザテーブルは結合する必要がない(やってもいいけど、利便性が下がる)

app.ts 実行結果

```
ExpertiseFieldUser {
  id: 100,
  expertiseFieldId: 1,
  expertiseFields: [
    ExpertiseField { id: 1, name: '資産運用A' },
    ExpertiseField { id: 2, name: '仕事' },
    ExpertiseField { id: 3, name: '何か' }
  ]
}
ExpertiseFieldUser {
  id: 2,
  expertiseFieldId: 1,
  expertiseFields: [ ExpertiseField { id: 1, name: '資産運用A' } ]
}
ExpertiseFieldUser {
  id: 21,
  expertiseFieldId: 1,
  expertiseFields: [ ExpertiseField { id: 1, name: '資産運用A' } ]
}
ExpertiseFieldUser {
  id: 50,
  expertiseFieldId: 1,
  expertiseFields: [
    ExpertiseField { id: 1, name: '資産運用A' },
    ExpertiseField { id: 2, name: '仕事' },
    ExpertiseField { id: 3, name: '何か' },
    ExpertiseField { id: 4, name: '教育資金' }
  ]
}
ExpertiseFieldUser {
  id: 113,
  expertiseFieldId: 2,
  expertiseFields: [ ExpertiseField { id: 2, name: '仕事' } ]
}
```
