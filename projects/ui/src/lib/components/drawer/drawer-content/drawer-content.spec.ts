import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DrawerContent } from "./drawer-content";

describe("DrawerContent", () => {
    let component: DrawerContent;
    let fixture: ComponentFixture<DrawerContent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DrawerContent],
        }).compileComponents();

        fixture = TestBed.createComponent(DrawerContent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
