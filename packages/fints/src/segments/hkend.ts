import { Format } from "../format";
import { SegmentClass } from "./segment";
import { SEPAAccount } from "../sepa-account";

export class HKENDProps {
    public segNo: number;
    public dialogId: number;
}

export class HKEND extends SegmentClass(HKENDProps) {
    public type = "HKEND";
    public version = 1;

    protected serialize() {
        return [ Format.number(this.dialogId) ];
    }

    protected deserialize() { throw new Error("Not implemented."); }
}
