import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DrawerUsage } from "./drawer-usage";

describe("DrawerUsage", () => {
    let component: DrawerUsage;
    let fixture: ComponentFixture<DrawerUsage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DrawerUsage],
        }).compileComponents();

        fixture = TestBed.createComponent(DrawerUsage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
