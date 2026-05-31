"use client";

import Link from "next/link";
import { useState } from "react";
import { apps } from "./data";

const ALL = "All";
const categories = [ALL, ...Array.from(new Set(apps.map((a) => a.category)))];

export default function ToolsGrid() {
  const [active, setActive] = useState(ALL);
  const visible = active === ALL ? apps : apps.filter((a) => a.category === active);

  return (
    <>
      {/* Filter pills — rendered in the right head column slot */}
      <div className="hx-filters" style={{ marginBottom: "0" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`hx-filter${active === cat ? " active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div className="hx-tool-grid" style={{ marginTop: "40px" }}>
        {visible.map((app, i) => {
          const num = String(apps.indexOf(app) + 1).padStart(2, "0");
          return (
            <Link key={app.slug} href={`/tools/${app.slug}`} className="hx-tool">
              <span className="hx-tool-n">{num}</span>
              <span className="hx-tool-tag">{app.category}</span>
              <h3 className="hx-tool-name">{app.title}</h3>
              <p className="hx-tool-desc">{app.tagline}</p>
              <span className="hx-tool-open">Open <span className="arw">&rarr;</span></span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
