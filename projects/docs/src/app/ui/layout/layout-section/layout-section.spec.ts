import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutSection } from "./layout-section";

describe("LayoutSection", () => {
    let component: LayoutSection;
    let fixture: ComponentFixture<LayoutSection>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LayoutSection],
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutSection);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
