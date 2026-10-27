"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/studio";

export function ServicesView() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="service-list">
      {services.map((service, i) => (
        <article className="service-item" key={service.title}>
          <Button
            variant="ghost"
            className="service-trigger"
            aria-expanded={open === i}
            aria-controls={`service-${i}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="service-trigger-left">
              <span className="service-index">0{i + 1}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
              </div>
            </div>
            {open === i ? <Minus /> : <Plus />}
          </Button>
          <div
            className="service-detail"
            data-open={open === i}
            id={`service-${i}`}
            role="region"
            aria-label={service.title}
            aria-hidden={open !== i}
          >
            <div>
              <p>{service.detail}</p>
            </div>
          </div>
        </article>
      ))}

    </div>
  );
}
