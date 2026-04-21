export default `import { Component } from "@angular/core";
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@singular/ui";

@Component({
    selector: "docs-accordion-usage",
    standalone: true,
    template: \`
        <ul sg-accordion class="min-w-100">
            @for (item of items; track item.title) {
                <li sg-accordion-item>
                    <header sg-accordion-header>
                        {{ item.title }}
                    </header>

                    <div sg-accordion-content>
                        {{ item.content }}
                    </div>
                </li>
            }
        </ul>
    \`,
    imports: [Accordion, AccordionItem, AccordionContent, AccordionHeader],
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
`;
