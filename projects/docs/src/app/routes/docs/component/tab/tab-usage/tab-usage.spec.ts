import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TabUsage } from "./tab-usage";

describe("TabUsage", () => {
    let component: TabUsage;
    let fixture: ComponentFixture<TabUsage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TabUsage],
        }).compileComponents();

        fixture = TestBed.createComponent(TabUsage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
