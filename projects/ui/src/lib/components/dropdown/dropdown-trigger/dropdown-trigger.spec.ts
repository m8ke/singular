import { TestBed } from "@angular/core/testing";

import { DropdownTrigger } from "./dropdown-trigger";
import { DropdownNodeService } from "../dropdown-node/dropdown-node-service";

describe("DropdownTrigger", () => {
    it("should create an instance", () => {
        TestBed.configureTestingModule({
            providers: [DropdownNodeService],
        });
        const directive = TestBed.runInInjectionContext(() => new DropdownTrigger());
        expect(directive).toBeTruthy();
    });
});
