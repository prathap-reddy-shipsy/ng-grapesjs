import { Component, Input } from '@angular/core';
import { NgxEditorComponent } from '../editor.component';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-newsletter-editor.service";
class NgxNewsletterEditorComponent extends NgxEditorComponent {
    constructor(ngxNewsletterEditorService) {
        super();
        this.ngxNewsletterEditorService = ngxNewsletterEditorService;
        this.placeholders = [];
        this.newsletterConfig = {
            container: '#gjs',
            plugins: ['grapesjs-preset-newsletter'],
            pluginsOpts: {
                'grapesjs-preset-newsletter': {
                    modalTitleImport: 'Import template'
                }
            },
            parser: {
                parserHtml: {}
            }
        };
        this.undo = (editor, sender) => {
            sender.set('active', 0);
            editor.UndoManager?.undo(1);
        };
        this.redo = (editor, sender) => {
            sender.set('active', 0);
            editor.UndoManager?.redo(1);
        };
    }
    ngOnInit() {
        // setup the default parser. It can be overriden by providing a custom implementation of the ngxNewsletterEditorService
        if (this.newsletterConfig.parser) {
            this.newsletterConfig.parser.parserHtml = this.ngxNewsletterEditorService?.parserHtml;
        }
        this.editor = this.setup(this.newsletterConfig);
        this.addButtons();
        this.addPlaceholders();
    }
    getRawHtml() {
        return this.editor?.runCommand?.('gjs-get-inlined-html');
    }
    addButtons() {
        this.editor?.Panels?.addButton('options', [
            {
                id: 'undo',
                className: 'fa fa-undo',
                command: this.undo,
                attributes: {
                    title: 'Undo'
                }
            },
            {
                id: 'redo',
                className: 'fa fa-repeat icon-redo',
                command: this.redo,
                attributes: {
                    title: 'Redo'
                }
            }
        ]);
    }
    addPlaceholders() {
        if (this.placeholders.length) {
            const placeholderSelectOptions = this.placeholders.map(placeholder => `<option
            title="${placeholder.description}"
            data-tooltip-pos="bottom"
            data-tooltip="Bold"
            class="gjs-one-color"
            value="<% ${placeholder.value} %>"
        >
        ${placeholder.name}
        </option>`);
            this.editor?.RichTextEditor?.add('placeholders', {
                icon: `<select class="gjs-field gjs-two-color">
                <option class="gjs-one-color" value="">- Select placeholder -</option>
                ${placeholderSelectOptions}
              </select>
        `,
                event: 'change',
                result: (rte, action) => rte.insertHTML(action.btn.firstChild.value),
                update: (_, action) => action.btn.firstChild.value = ''
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorComponent, deps: [{ token: i1.NgxNewsletterEditorService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NgxNewsletterEditorComponent, selector: "ngx-grapes-newsletter-editor", inputs: { placeholders: "placeholders" }, usesInheritance: true, ngImport: i0, template: '<div id="gjs"></div>', isInline: true }); }
}
export { NgxNewsletterEditorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-grapes-newsletter-editor',
                    template: '<div id="gjs"></div>'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxNewsletterEditorService }]; }, propDecorators: { placeholders: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5ld3NsZXR0ZXItZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1ncmFwZXNqcy9zcmMvbGliL25ld3NsZXR0ZXItZWRpdG9yL25neC1uZXdzbGV0dGVyLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUV6RCxNQUlhLDRCQUE2QixTQUFRLGtCQUFrQjtJQWtCbEUsWUFBb0IsMEJBQXNEO1FBQ3hFLEtBQUssRUFBRSxDQUFDO1FBRFUsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQWhCakUsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBR2xDLHFCQUFnQixHQUE4QjtZQUNwRCxTQUFTLEVBQUUsTUFBTTtZQUNqQixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN2QyxXQUFXLEVBQUU7Z0JBQ1gsNEJBQTRCLEVBQUU7b0JBQzVCLGdCQUFnQixFQUFFLGlCQUFpQjtpQkFDcEM7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsRUFBRTthQUNmO1NBQ0YsQ0FBQztRQXNCTSxTQUFJLEdBQUcsQ0FBQyxNQUF3QixFQUFFLE1BQXFCLEVBQUUsRUFBRTtZQUNqRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUM7UUFFTSxTQUFJLEdBQUcsQ0FBQyxNQUF3QixFQUFFLE1BQXFCLEVBQUUsRUFBRTtZQUNqRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUM7SUExQkYsQ0FBQztJQUVELFFBQVE7UUFDTix1SEFBdUg7UUFDdkgsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUM7U0FDdkY7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFZTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDeEM7Z0JBQ0UsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDbEIsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxNQUFNO2lCQUNkO2FBQ0Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsTUFBTTtnQkFDVixTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQUUsTUFBTTtpQkFDZDthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM1QixNQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ25FO3FCQUNhLFdBQVcsQ0FBQyxXQUFXOzs7O3dCQUlwQixXQUFXLENBQUMsS0FBSzs7VUFFL0IsV0FBVyxDQUFDLElBQUk7a0JBQ1IsQ0FDWCxDQUFDO1lBRUYsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsRUFBRTtnQkFDL0MsSUFBSSxFQUFFOztrQkFFSSx3QkFBd0I7O1NBRWpDO2dCQUNELEtBQUssRUFBRSxRQUFRO2dCQUNmLE1BQU0sRUFBRSxDQUFDLEdBQWUsRUFBRSxNQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDNUYsTUFBTSxFQUFFLENBQUMsQ0FBYSxFQUFFLE1BQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFO2FBQ2hGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs4R0E5RlUsNEJBQTRCO2tHQUE1Qiw0QkFBNEIscUlBRjdCLHNCQUFzQjs7U0FFckIsNEJBQTRCOzJGQUE1Qiw0QkFBNEI7a0JBSnhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7aUhBR1UsWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kU2VuZGVyLCBOZXdzbGV0dGVyQ29uZmlnLCBOZXdzbGV0dGVyRWRpdG9yLCBUZXh0QWN0aW9uLCBUZXh0RWRpdG9yIH0gZnJvbSAnLi9uZXdzbGV0dGVyLWVkaXRvci5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hOZXdzbGV0dGVyRWRpdG9yU2VydmljZSB9IGZyb20gJy4vbmd4LW5ld3NsZXR0ZXItZWRpdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyLm1vZGVsJztcbmltcG9ydCB7IE5neEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXRvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ3JhcGVzLW5ld3NsZXR0ZXItZWRpdG9yJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGlkPVwiZ2pzXCI+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hOZXdzbGV0dGVyRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgTmd4RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcnM6IFBsYWNlaG9sZGVyW10gPSBbXTtcblxuICBwcml2YXRlIGVkaXRvcjogTmV3c2xldHRlckVkaXRvciB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBuZXdzbGV0dGVyQ29uZmlnOiBQYXJ0aWFsPE5ld3NsZXR0ZXJDb25maWc+ID0ge1xuICAgIGNvbnRhaW5lcjogJyNnanMnLFxuICAgIHBsdWdpbnM6IFsnZ3JhcGVzanMtcHJlc2V0LW5ld3NsZXR0ZXInXSxcbiAgICBwbHVnaW5zT3B0czoge1xuICAgICAgJ2dyYXBlc2pzLXByZXNldC1uZXdzbGV0dGVyJzoge1xuICAgICAgICBtb2RhbFRpdGxlSW1wb3J0OiAnSW1wb3J0IHRlbXBsYXRlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFyc2VyOiB7XG4gICAgICBwYXJzZXJIdG1sOiB7fVxuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neE5ld3NsZXR0ZXJFZGl0b3JTZXJ2aWNlOiBOZ3hOZXdzbGV0dGVyRWRpdG9yU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBzZXR1cCB0aGUgZGVmYXVsdCBwYXJzZXIuIEl0IGNhbiBiZSBvdmVycmlkZW4gYnkgcHJvdmlkaW5nIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIG9mIHRoZSBuZ3hOZXdzbGV0dGVyRWRpdG9yU2VydmljZVxuICAgIGlmICh0aGlzLm5ld3NsZXR0ZXJDb25maWcucGFyc2VyKSB7XG4gICAgICB0aGlzLm5ld3NsZXR0ZXJDb25maWcucGFyc2VyLnBhcnNlckh0bWwgPSB0aGlzLm5neE5ld3NsZXR0ZXJFZGl0b3JTZXJ2aWNlPy5wYXJzZXJIdG1sO1xuICAgIH1cblxuICAgIHRoaXMuZWRpdG9yID0gdGhpcy5zZXR1cCh0aGlzLm5ld3NsZXR0ZXJDb25maWcpO1xuXG4gICAgdGhpcy5hZGRCdXR0b25zKCk7XG4gICAgdGhpcy5hZGRQbGFjZWhvbGRlcnMoKTtcbiAgfVxuXG4gIGdldFJhd0h0bWwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3I/LnJ1bkNvbW1hbmQ/LignZ2pzLWdldC1pbmxpbmVkLWh0bWwnKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5kbyA9IChlZGl0b3I6IE5ld3NsZXR0ZXJFZGl0b3IsIHNlbmRlcjogQ29tbWFuZFNlbmRlcikgPT4ge1xuICAgIHNlbmRlci5zZXQoJ2FjdGl2ZScsIDApO1xuICAgIGVkaXRvci5VbmRvTWFuYWdlcj8udW5kbygxKTtcbiAgfTtcblxuICBwcml2YXRlIHJlZG8gPSAoZWRpdG9yOiBOZXdzbGV0dGVyRWRpdG9yLCBzZW5kZXI6IENvbW1hbmRTZW5kZXIpID0+IHtcbiAgICBzZW5kZXIuc2V0KCdhY3RpdmUnLCAwKTtcbiAgICBlZGl0b3IuVW5kb01hbmFnZXI/LnJlZG8oMSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBhZGRCdXR0b25zKCkge1xuICAgIHRoaXMuZWRpdG9yPy5QYW5lbHM/LmFkZEJ1dHRvbignb3B0aW9ucycsIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd1bmRvJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnZmEgZmEtdW5kbycsXG4gICAgICAgIGNvbW1hbmQ6IHRoaXMudW5kbyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIHRpdGxlOiAnVW5kbydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdyZWRvJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnZmEgZmEtcmVwZWF0IGljb24tcmVkbycsXG4gICAgICAgIGNvbW1hbmQ6IHRoaXMucmVkbyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIHRpdGxlOiAnUmVkbydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQbGFjZWhvbGRlcnMoKSB7XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXJTZWxlY3RPcHRpb25zID0gdGhpcy5wbGFjZWhvbGRlcnMubWFwKHBsYWNlaG9sZGVyID0+XG4gICAgICAgIGA8b3B0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIiR7cGxhY2Vob2xkZXIuZGVzY3JpcHRpb259XCJcbiAgICAgICAgICAgIGRhdGEtdG9vbHRpcC1wb3M9XCJib3R0b21cIlxuICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiQm9sZFwiXG4gICAgICAgICAgICBjbGFzcz1cImdqcy1vbmUtY29sb3JcIlxuICAgICAgICAgICAgdmFsdWU9XCI8JSAke3BsYWNlaG9sZGVyLnZhbHVlfSAlPlwiXG4gICAgICAgID5cbiAgICAgICAgJHtwbGFjZWhvbGRlci5uYW1lfVxuICAgICAgICA8L29wdGlvbj5gXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVkaXRvcj8uUmljaFRleHRFZGl0b3I/LmFkZCgncGxhY2Vob2xkZXJzJywge1xuICAgICAgICBpY29uOiBgPHNlbGVjdCBjbGFzcz1cImdqcy1maWVsZCBnanMtdHdvLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzcz1cImdqcy1vbmUtY29sb3JcIiB2YWx1ZT1cIlwiPi0gU2VsZWN0IHBsYWNlaG9sZGVyIC08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAke3BsYWNlaG9sZGVyU2VsZWN0T3B0aW9uc31cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIGAsXG4gICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICAgICAgcmVzdWx0OiAocnRlOiBUZXh0RWRpdG9yLCBhY3Rpb246IFRleHRBY3Rpb24pID0+IHJ0ZS5pbnNlcnRIVE1MKGFjdGlvbi5idG4uZmlyc3RDaGlsZC52YWx1ZSksXG4gICAgICAgIHVwZGF0ZTogKF86IFRleHRFZGl0b3IsIGFjdGlvbjogVGV4dEFjdGlvbikgPT4gYWN0aW9uLmJ0bi5maXJzdENoaWxkLnZhbHVlID0gJydcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=