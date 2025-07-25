# TelBet Frontend

This project is a simple Next.js UI meant to be embedded inside a Telegram Web App.

## Telegram Web App Integration

The UI reads basic user information from `window.Telegram.WebApp.initDataUnsafe.user` when running inside Telegram. The object should contain at least the following fields:

- `id`
- `first_name`
- `last_name`
- `username`
- `photo_url`

Example snippet that mocks the data during local development:

```html
<script>
  window.Telegram = {
    WebApp: {
      initDataUnsafe: {
        user: {
          id: 123,
          first_name: 'John',
          last_name: 'Doe',
          username: 'jdoe',
          photo_url: 'https://placehold.co/64x64'
        }
      }
    }
  }
</script>
```

When no Telegram user data is available the UI falls back to placeholder images and names.
