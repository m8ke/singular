import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ComponentTab } from "./tab";

describe("Tab", () => {
    let component: ComponentTab;
    let fixture: ComponentFixture<ComponentTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ComponentTab],
        }).compileComponents();

        fixture = TestBed.createComponent(ComponentTab);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
