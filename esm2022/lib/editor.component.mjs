import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
class NgxEditorComponent {
    constructor() {
        this.template = '';
        this.storagePrefix = 'gjs-';
    }
    setup(customConfig) {
        const config = {
            components: this.template,
            storageManager: {
                id: this.storagePrefix
            }
        };
        return grapesjs.init({
            ...config,
            ...customConfig
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NgxEditorComponent, selector: "ng-component", inputs: { template: "template", storagePrefix: "storagePrefix" }, ngImport: i0, template: '', isInline: true }); }
}
export { NgxEditorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxEditorComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { template: [{
                type: Input
            }], storagePrefix: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1ncmFwZXNqcy9zcmMvbGliL2VkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUWpELE1BSWEsa0JBQWtCO0lBSi9CO1FBTVcsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGtCQUFhLEdBQUcsTUFBTSxDQUFDO0tBZ0JqQztJQWRDLEtBQUssQ0FBQyxZQUE2QjtRQUNqQyxNQUFNLE1BQU0sR0FBb0I7WUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLGNBQWMsRUFBRTtnQkFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDdkI7U0FDRixDQUFDO1FBRUYsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEdBQUcsTUFBTTtZQUNULEdBQUcsWUFBWTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQWpCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixzSEFIbkIsRUFBRTs7U0FHRCxrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFJVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZWRpdG9yLm1vZGVsJztcblxuZGVjbGFyZSB2YXIgZ3JhcGVzanM6IHtcbiAgaW5pdChvcHRpb25zOiBhbnkpOiBvYmplY3Q7XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB0ZW1wbGF0ZSA9ICcnO1xuICBASW5wdXQoKSBzdG9yYWdlUHJlZml4ID0gJ2dqcy0nO1xuXG4gIHNldHVwKGN1c3RvbUNvbmZpZzogUGFydGlhbDxDb25maWc+KSB7XG4gICAgY29uc3QgY29uZmlnOiBQYXJ0aWFsPENvbmZpZz4gPSB7XG4gICAgICBjb21wb25lbnRzOiB0aGlzLnRlbXBsYXRlLFxuICAgICAgc3RvcmFnZU1hbmFnZXI6IHtcbiAgICAgICAgaWQ6IHRoaXMuc3RvcmFnZVByZWZpeFxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZ3JhcGVzanMuaW5pdCh7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAuLi5jdXN0b21Db25maWdcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=