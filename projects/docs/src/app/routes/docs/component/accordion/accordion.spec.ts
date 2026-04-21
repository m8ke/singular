import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ComponentAccordion } from "./accordion";

describe("Accordion", () => {
    let component: ComponentAccordion;
    let fixture: ComponentFixture<ComponentAccordion>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ComponentAccordion],
        }).compileComponents();

        fixture = TestBed.createComponent(ComponentAccordion);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
