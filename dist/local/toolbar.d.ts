import { Element } from "./base/element";
import { Spreadsheet } from "../core/index";
import { Cell } from '../core/cell';
import { Dropdown } from './base/dropdown';
export declare class Toolbar {
    ss: Spreadsheet;
    el: Element;
    defaultCell: Cell;
    target: Element | null;
    currentCell: Cell | null;
    elUndo: Element;
    elRedo: Element;
    elPaintformat: Element;
    elClearformat: Element;
    elFormat: Dropdown;
    elFont: Dropdown;
    elFontSize: Dropdown;
    elFontWeight: Element;
    elFontStyle: Element;
    elTextDecoration: Element;
    elColor: Dropdown;
    elBackgroundColor: Dropdown;
    elMerge: Element;
    elAlign: Dropdown;
    elValign: Dropdown;
    elWordWrap: Element;
    change: (key: keyof Cell, v: any) => void;
    redo: () => boolean;
    undo: () => boolean;
    constructor(ss: Spreadsheet);
    set(target: Element, cell: Cell | null): void;
    private setCell(cell);
    private setCellStyle();
    setRedoAble(flag: boolean): void;
    setUndoAble(flag: boolean): void;
    private buildSeparator();
    private buildAligns();
    private buildValigns();
    private buildWordWrap();
    private buildFontWeight();
    private buildFontStyle();
    private buildTextDecoration();
    private buildMerge();
    private buildColor();
    private buildBackgroundColor();
    private buildUndo();
    private buildRedo();
    private buildPaintformat();
    private buildClearformat();
    private buildFormats();
    private buildFonts();
    private buildFontSizes();
}
