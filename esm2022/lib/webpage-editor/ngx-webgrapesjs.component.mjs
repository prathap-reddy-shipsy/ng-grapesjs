import { Component } from '@angular/core';
import { NgxEditorComponent } from '../editor.component';
import * as i0 from "@angular/core";
class NgxWebpageEditorComponent extends NgxEditorComponent {
    constructor() {
        super(...arguments);
        this.webpageConfig = {
            container: '#gjs',
            plugins: [
                'grapesjs-preset-webpage',
                'gjs-blocks-basic',
                'grapesjs-plugin-forms',
                'grapesjs-plugin-ckeditor',
                'grapesjs-blocks-table',
                'grapesjs-component-code-editor'
            ],
            pluginsOpts: {
                'grapesjs-blocks-table': { 'containerId': '#gjs' },
                'grapesjs-preset-webpage': {
                    modalTitleImport: 'Import template'
                }
            }
        };
    }
    ngOnInit() {
        this.editor = this.setup(this.webpageConfig);
        const pn = this.editor.Panels;
        const panelViews = pn.addPanel({
            id: 'views'
        });
        panelViews.get('buttons').add([{
                attributes: {
                    title: 'Open Code'
                },
                className: 'fa fa-file-code-o',
                command: 'open-code',
                togglable: false,
                id: 'open-code'
            }]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxWebpageEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NgxWebpageEditorComponent, selector: "ngx-grapes-webpage-editor", usesInheritance: true, ngImport: i0, template: '<div id="gjs"></div>', isInline: true }); }
}
export { NgxWebpageEditorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxWebpageEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-grapes-webpage-editor',
                    template: '<div id="gjs"></div>'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdlYmdyYXBlc2pzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1ncmFwZXNqcy9zcmMvbGliL3dlYnBhZ2UtZWRpdG9yL25neC13ZWJncmFwZXNqcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHekQsTUFLYSx5QkFBMEIsU0FBUSxrQkFBa0I7SUFMakU7O1FBUVUsa0JBQWEsR0FBb0I7WUFDdkMsU0FBUyxFQUFFLE1BQU07WUFDakIsT0FBTyxFQUFFO2dCQUNQLHlCQUF5QjtnQkFDekIsa0JBQWtCO2dCQUNsQix1QkFBdUI7Z0JBQ3ZCLDBCQUEwQjtnQkFDMUIsdUJBQXVCO2dCQUN2QixnQ0FBZ0M7YUFDakM7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsdUJBQXVCLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO2dCQUNsRCx5QkFBeUIsRUFBRTtvQkFDekIsZ0JBQWdCLEVBQUUsaUJBQWlCO2lCQUNwQzthQUNGO1NBQ0YsQ0FBQztLQW1CSDtJQWpCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzdCLEVBQUUsRUFBRSxPQUFPO1NBQ1osQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxXQUFXO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixPQUFPLEVBQUUsV0FBVztnQkFDcEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEVBQUUsRUFBRSxXQUFXO2FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs4R0FwQ1UseUJBQXlCO2tHQUF6Qix5QkFBeUIsd0ZBSDFCLHNCQUFzQjs7U0FHckIseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBTHJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2VkaXRvci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1ncmFwZXMtd2VicGFnZS1lZGl0b3InLFxuICB0ZW1wbGF0ZTogJzxkaXYgaWQ9XCJnanNcIj48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4V2VicGFnZUVkaXRvckNvbXBvbmVudCBleHRlbmRzIE5neEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZWRpdG9yOiBhbnk7XG4gIHByaXZhdGUgd2VicGFnZUNvbmZpZzogUGFydGlhbDxDb25maWc+ID0ge1xuICAgIGNvbnRhaW5lcjogJyNnanMnLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICdncmFwZXNqcy1wcmVzZXQtd2VicGFnZScsXG4gICAgICAnZ2pzLWJsb2Nrcy1iYXNpYycsXG4gICAgICAnZ3JhcGVzanMtcGx1Z2luLWZvcm1zJyxcbiAgICAgICdncmFwZXNqcy1wbHVnaW4tY2tlZGl0b3InLFxuICAgICAgJ2dyYXBlc2pzLWJsb2Nrcy10YWJsZScsXG4gICAgICAnZ3JhcGVzanMtY29tcG9uZW50LWNvZGUtZWRpdG9yJ1xuICAgIF0sXG4gICAgcGx1Z2luc09wdHM6IHtcbiAgICAgICdncmFwZXNqcy1ibG9ja3MtdGFibGUnOiB7ICdjb250YWluZXJJZCc6ICcjZ2pzJyB9LFxuICAgICAgJ2dyYXBlc2pzLXByZXNldC13ZWJwYWdlJzoge1xuICAgICAgICBtb2RhbFRpdGxlSW1wb3J0OiAnSW1wb3J0IHRlbXBsYXRlJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVkaXRvciA9IHRoaXMuc2V0dXAodGhpcy53ZWJwYWdlQ29uZmlnKTtcbiAgICBjb25zdCBwbiA9IHRoaXMuZWRpdG9yLlBhbmVscztcbiAgICBjb25zdCBwYW5lbFZpZXdzID0gcG4uYWRkUGFuZWwoe1xuICAgICAgaWQ6ICd2aWV3cydcbiAgICB9KTtcbiAgICBwYW5lbFZpZXdzLmdldCgnYnV0dG9ucycpLmFkZChbe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB0aXRsZTogJ09wZW4gQ29kZSdcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWU6ICdmYSBmYS1maWxlLWNvZGUtbycsXG4gICAgICBjb21tYW5kOiAnb3Blbi1jb2RlJyxcbiAgICAgIHRvZ2dsYWJsZTogZmFsc2UsXG4gICAgICBpZDogJ29wZW4tY29kZSdcbiAgICB9XSk7XG4gIH1cblxufVxuIl19