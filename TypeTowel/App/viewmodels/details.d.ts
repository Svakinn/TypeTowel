/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />
export interface ICountry {
    id: string;
    name: KnockoutObservable<string>;
    toolTip: KnockoutObservable<string>;
}
export declare class DetailsView {
    constructor();
    public title: KnockoutObservable<string>;
    public countries: KnockoutObservableArray<ICountry>;
    public compTitle: KnockoutComputed<string>;
    public clickUpdatTitle(newTitle: string): void;
    public activateToolTips(): void;
    public activate(): boolean;
    public viewAttached(view): void;
}
export declare var vm: DetailsView;
export declare var activate: () => boolean;
export declare var attached: (view: any) => void;
