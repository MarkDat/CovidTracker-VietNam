import { CaseOverView } from "./case-overview";
import { CaseProvince } from "./case-province";
import { TotalCase } from "./case-total";

export class CaseCovid{
  public total : TotalCase;
  public today : TotalCase;
  public overview : CaseOverView[];
  public locations : CaseProvince[];
}
