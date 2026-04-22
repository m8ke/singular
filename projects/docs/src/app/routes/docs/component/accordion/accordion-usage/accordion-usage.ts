import { Component } from "@angular/core";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "@singular/ui";

@Component({
    template: `
        <ul sg-accordion class="min-w-100">
            @for (item of items; track item.title) {
                <li sg-accordion-item>
                    <header sg-accordion-header>
                        {{ item.title }}
                    </header>

                    <article sg-accordion-body>
                        {{ item.content }}
                    </article>
                </li>
            }
        </ul>
    `,
    imports: [Accordion, AccordionItem, AccordionBody, AccordionHeader],
})
export class AccordionUsage {
    items = [
        {
            title: "What are your shipping options?",
            content: "Lorem ipsum dolor sit amet",
        },
        {
            title: "What is your return policy?",
            content: "Lorem ipsum dolor sit amet",
        },
    ];
}
