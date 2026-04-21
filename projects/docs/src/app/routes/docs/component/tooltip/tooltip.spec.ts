import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Tooltip } from "../../../../../../../ui/src/lib/components/tooltip/tooltip";

describe("Tooltip", () => {
    let component: Tooltip;
    let fixture: ComponentFixture<Tooltip>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Tooltip],
        }).compileComponents();

        fixture = TestBed.createComponent(Tooltip);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
