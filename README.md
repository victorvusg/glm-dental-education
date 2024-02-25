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

curl https://api.openai.com/v1/chat/completions \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer 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" \
 -d '{
"model": "gpt-3.5-turbo",
"messages": [{"role": "user", "content": "Say this is a test!"}],
"temperature": 0.7
}'
