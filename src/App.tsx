import { useState } from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";

type Status = "not-started" | "in-progress" | "shipped";

const statusLabel: Record<Status, string> = {
  "not-started": "Not Started",
  "in-progress": "In Progress",
  shipped: "Shipped",
};

type PlaceholderProps = {
  title: string;
  subtitle?: string;
};

function PlaceholderPage({ title, subtitle }: PlaceholderProps) {
  return (
    <>
      <section className="context-header">
        <h1 className="context-header__title">{title}</h1>
        <p className="context-header__subtitle">
          {subtitle ?? "This section will be built in the next step."}
        </p>
      </section>
      <main className="layout-main layout-main--empty" aria-label={title} />
    </>
  );
}

export function App() {
  const [status] = useState<Status>("not-started");
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <div className="app-shell">
      <header className="top-bar">
        <div className="top-bar__app-name">Job Notification App</div>
        <div className="top-bar__progress">Step 1 / 4</div>
        <div
          className={[
            "status-badge",
            status === "not-started"
              ? "status-badge--not-started"
              : status === "in-progress"
              ? "status-badge--in-progress"
              : "status-badge--shipped",
          ].join(" ")}
        >
          {statusLabel[status]}
        </div>
      </header>

      <nav className="top-nav" aria-label="Primary navigation">
        <button
          type="button"
          className="top-nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="top-nav__toggle-bar" />
          <span className="top-nav__toggle-bar" />
          <span className="top-nav__toggle-bar" />
        </button>
        <div
          className={[
            "top-nav__links",
            navOpen ? "top-nav__links--open" : "",
          ].join(" ")}
        >
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              [
                "top-nav__link",
                isActive ? "top-nav__link--active" : "",
              ].join(" ")
            }
            onClick={closeNav}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              [
                "top-nav__link",
                isActive ? "top-nav__link--active" : "",
              ].join(" ")
            }
            onClick={closeNav}
          >
            Saved
          </NavLink>
          <NavLink
            to="/digest"
            className={({ isActive }) =>
              [
                "top-nav__link",
                isActive ? "top-nav__link--active" : "",
              ].join(" ")
            }
            onClick={closeNav}
          >
            Digest
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              [
                "top-nav__link",
                isActive ? "top-nav__link--active" : "",
              ].join(" ")
            }
            onClick={closeNav}
          >
            Settings
          </NavLink>
          <NavLink
            to="/proof"
            className={({ isActive }) =>
              [
                "top-nav__link",
                isActive ? "top-nav__link--active" : "",
              ].join(" ")
            }
            onClick={closeNav}
          >
            Proof
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={<PlaceholderPage title="Dashboard" />}
        />
        <Route path="/saved" element={<PlaceholderPage title="Saved" />} />
        <Route path="/digest" element={<PlaceholderPage title="Digest" />} />
        <Route
          path="/settings"
          element={<PlaceholderPage title="Settings" />}
        />
        <Route path="/proof" element={<PlaceholderPage title="Proof" />} />
        <Route
          path="*"
          element={
            <PlaceholderPage
              title="Page Not Found"
              subtitle="The page you are looking for does not exist."
            />
          }
        />
      </Routes>

      <footer className="proof-footer">
        <ul className="proof-footer__list">
          <li className="proof-footer__item">
            <span className="checkbox" aria-hidden="true" /> <span>UI Built</span>
          </li>
          <li className="proof-footer__item">
            <span className="checkbox" aria-hidden="true" />{" "}
            <span>Logic Working</span>
          </li>
          <li className="proof-footer__item">
            <span className="checkbox" aria-hidden="true" />{" "}
            <span>Test Passed</span>
          </li>
          <li className="proof-footer__item">
            <span className="checkbox" aria-hidden="true" />{" "}
            <span>Deployed</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}

