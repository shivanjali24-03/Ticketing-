<div align="center">

# 🎫 Ticketing Admin Dashboard

**A multi-page admin panel for managing users, roles and accounts, built with React.**

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

![License: MIT](https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge)

</div>

## What it does

This is the admin side of a ticketing system, where staff manage the people who use it. It has a sidebar and header layout with these pages:

| Page | Route | Purpose |
|---|---|---|
| Dashboard | `/` | Overview home screen |
| User List | `/userlist` | See all users |
| Manage Roles | `/manageroles` | Control who can do what |
| Add Account | `/addAccount` | Create a new user account |
| Account | `/account` | Account details |
| Profile | `/profile` | The logged-in user's profile |
| Forms / Tables | `/forms`, `/tables` | Reusable form and table layouts |
| Settings | `/settings` | App settings |
| Logout | `/logout` | Sign out |

## What it shows

- **Client-side routing** with React Router 7: fast page changes with no full reloads
- **Reusable components**: `Sidebar`, `Header`, `UserNav` and `UserActions` are shared across pages
- **Responsive layout** with Bootstrap 5, with icons from Lucide, React Icons and Boxicons
- A clear folder structure that separates `components/` and `pages/`

```
src/
├── components/   # Sidebar, Header, UserNav, UserActions
└── pages/        # Dashboard, UserList, ManageRoles, Account, ...
```

## Run it locally

```bash
npm install
npm start         # opens on http://localhost:3000
```

Other scripts: `npm test` and `npm run build`.

## Roadmap

- [ ] Connect to a Node.js + MongoDB backend
- [ ] Login with role-based access
- [ ] Ticket create, assign and close flow
- [ ] Live demo

## License

This project is licensed under the [MIT License](LICENSE).

---

Built by [Shivanjali Desai](https://github.com/shivanjali24-03)
