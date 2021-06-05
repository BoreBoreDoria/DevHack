/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
export class NzCascaderOptionComponent {
    constructor(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        this.expandIcon = 'right';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
        this.nativeElement = elementRef.nativeElement;
    }
    get optionLabel() {
        return this.option[this.nzLabelProperty];
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
}
NzCascaderOptionComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-cascader-option]',
                exportAs: 'nzCascaderOption',
                template: `
    <ng-container *ngIf="optionTemplate; else defaultOptionTemplate">
      <ng-template [ngTemplateOutlet]="optionTemplate" [ngTemplateOutletContext]="{ $implicit: option, index: columnIndex }"></ng-template>
    </ng-container>
    <ng-template #defaultOptionTemplate>
      <span [innerHTML]="optionLabel | nzHighlight: highlightText:'g':'ant-cascader-menu-item-keyword'"></span>
    </ng-template>
    <span *ngIf="!option.isLeaf || option.children?.length || option.loading" class="ant-cascader-menu-item-expand-icon">
      <i *ngIf="option.loading; else icon" nz-icon nzType="loading"></i>
      <ng-template #icon>
        <ng-container *nzStringTemplateOutlet="expandIcon">
          <i nz-icon [nzType]="$any(expandIcon)"></i>
        </ng-container>
      </ng-template>
    </span>
  `,
                host: {
                    '[attr.title]': 'option.title || optionLabel',
                    '[class.ant-cascader-menu-item-active]': 'activated',
                    '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                    '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                }
            },] }
];
NzCascaderOptionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
NzCascaderOptionComponent.propDecorators = {
    optionTemplate: [{ type: Input }],
    option: [{ type: Input }],
    activated: [{ type: Input }],
    highlightText: [{ type: Input }],
    nzLabelProperty: [{ type: Input }],
    columnIndex: [{ type: Input }],
    expandIcon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvY29tcG9uZW50cy9jYXNjYWRlci8iLCJzb3VyY2VzIjpbImNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBZ0N2QixNQUFNLE9BQU8seUJBQXlCO0lBV3BDLFlBQW9CLEdBQXNCLEVBQUUsVUFBc0IsRUFBRSxRQUFtQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVZqQyxtQkFBYyxHQUF5QyxJQUFJLENBQUM7UUFFNUQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixvQkFBZSxHQUFHLE9BQU8sQ0FBQztRQUcxQixlQUFVLEdBQStCLE9BQU8sQ0FBQztRQUl4RCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO2dCQUNELElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsNkJBQTZCO29CQUM3Qyx1Q0FBdUMsRUFBRSxXQUFXO29CQUNwRCx1Q0FBdUMsRUFBRSxnQkFBZ0I7b0JBQ3pELHlDQUF5QyxFQUFFLGlCQUFpQjtpQkFDN0Q7YUFDRjs7O1lBdENDLGlCQUFpQjtZQUVqQixVQUFVO1lBRVYsU0FBUzs7OzZCQW9DUixLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbiB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdbbnotY2FzY2FkZXItb3B0aW9uXScsXG4gIGV4cG9ydEFzOiAnbnpDYXNjYWRlck9wdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvblRlbXBsYXRlOyBlbHNlIGRlZmF1bHRPcHRpb25UZW1wbGF0ZVwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm9wdGlvblRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBvcHRpb24sIGluZGV4OiBjb2x1bW5JbmRleCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRPcHRpb25UZW1wbGF0ZT5cbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwib3B0aW9uTGFiZWwgfCBuekhpZ2hsaWdodDogaGlnaGxpZ2h0VGV4dDonZyc6J2FudC1jYXNjYWRlci1tZW51LWl0ZW0ta2V5d29yZCdcIj48L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8c3BhbiAqbmdJZj1cIiFvcHRpb24uaXNMZWFmIHx8IG9wdGlvbi5jaGlsZHJlbj8ubGVuZ3RoIHx8IG9wdGlvbi5sb2FkaW5nXCIgY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudS1pdGVtLWV4cGFuZC1pY29uXCI+XG4gICAgICA8aSAqbmdJZj1cIm9wdGlvbi5sb2FkaW5nOyBlbHNlIGljb25cIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L2k+XG4gICAgICA8bmctdGVtcGxhdGUgI2ljb24+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJleHBhbmRJY29uXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIiRhbnkoZXhwYW5kSWNvbilcIj48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGl0bGVdJzogJ29wdGlvbi50aXRsZSB8fCBvcHRpb25MYWJlbCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWFjdGl2ZV0nOiAnYWN0aXZhdGVkJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tZXhwYW5kXSc6ICchb3B0aW9uLmlzTGVhZicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWRpc2FibGVkXSc6ICdvcHRpb24uZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG9wdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOekNhc2NhZGVyT3B0aW9uPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb24hOiBOekNhc2NhZGVyT3B0aW9uO1xuICBASW5wdXQoKSBhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dCE6IHN0cmluZztcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcbiAgQElucHV0KCkgY29sdW1uSW5kZXghOiBudW1iZXI7XG5cbiAgQElucHV0KCkgZXhwYW5kSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAncmlnaHQnO1xuICByZWFkb25seSBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXItbWVudS1pdGVtJyk7XG4gICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IG9wdGlvbkxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uW3RoaXMubnpMYWJlbFByb3BlcnR5XTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19