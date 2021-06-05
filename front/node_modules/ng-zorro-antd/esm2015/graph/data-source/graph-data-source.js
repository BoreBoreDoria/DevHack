/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
export class NzGraphData {
    constructor(source) {
        var _a;
        this._data = new BehaviorSubject({});
        /** A selection model with multi-selection to track expansion status. */
        this.expansionModel = new SelectionModel(true);
        if (source) {
            (_a = this.expansionModel) === null || _a === void 0 ? void 0 : _a.clear();
            this.dataSource = source;
            this._data.next(source);
        }
    }
    /** Toggles one single data node's expanded/collapsed state. */
    toggle(nodeName) {
        this.expansionModel.toggle(nodeName);
    }
    /** Expands one single data node. */
    expand(nodeName) {
        this.expansionModel.select(nodeName);
    }
    /** Collapses one single data node. */
    collapse(nodeName) {
        this.expansionModel.deselect(nodeName);
    }
    /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
    isExpanded(nodeName) {
        return this.expansionModel.isSelected(nodeName);
    }
    /** Collapse all dataNodes in the tree. */
    collapseAll() {
        this.expansionModel.clear();
    }
    expandAll() {
        this.expansionModel.select(...Object.keys(this._data.value.compound || {}));
    }
    setData(data) {
        var _a;
        (_a = this.expansionModel) === null || _a === void 0 ? void 0 : _a.clear();
        this.dataSource = data;
        this._data.next(data);
    }
    connect() {
        const changes = [this._data, this.expansionModel.changed];
        return merge(...changes).pipe(map(() => this._data.value));
    }
    disconnect() {
        // do nothing for now
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGgtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9jb21wb25lbnRzL2dyYXBoLyIsInNvdXJjZXMiOlsiZGF0YS1zb3VyY2UvZ3JhcGgtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxNQUFNLE9BQU8sV0FBVztJQXlDdEIsWUFBWSxNQUF1Qjs7UUF4QzNCLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBb0IsQ0FBQyxDQUFDO1FBRTFFLHdFQUF3RTtRQUN4RSxtQkFBYyxHQUEyQixJQUFJLGNBQWMsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQXNDeEUsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFBLElBQUksQ0FBQyxjQUFjLDBDQUFFLEtBQUssR0FBRztZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUF6Q0QsK0RBQStEO0lBQy9ELE1BQU0sQ0FBQyxRQUFnQjtRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLE1BQU0sQ0FBQyxRQUFnQjtRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLFFBQVEsQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsK0ZBQStGO0lBQy9GLFVBQVUsQ0FBQyxRQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFvQjs7UUFDMUIsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxLQUFLLEdBQUc7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQVVELE9BQU87UUFDTCxNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxPQUFPLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxVQUFVO1FBQ1IscUJBQXFCO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56R3JhcGhEYXRhRGVmIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IE56R3JhcGhCYXNlU291cmNlIH0gZnJvbSAnLi9iYXNlLWdyYXBoLXNvdXJjZSc7XG5cbmV4cG9ydCBjbGFzcyBOekdyYXBoRGF0YSBpbXBsZW1lbnRzIE56R3JhcGhCYXNlU291cmNlPE56R3JhcGhEYXRhRGVmLCBzdHJpbmc+IHtcbiAgcHJpdmF0ZSBfZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpHcmFwaERhdGFEZWY+KHt9IGFzIE56R3JhcGhEYXRhRGVmKTtcbiAgZGF0YVNvdXJjZSE6IE56R3JhcGhEYXRhRGVmO1xuICAvKiogQSBzZWxlY3Rpb24gbW9kZWwgd2l0aCBtdWx0aS1zZWxlY3Rpb24gdG8gdHJhY2sgZXhwYW5zaW9uIHN0YXR1cy4gKi9cbiAgZXhwYW5zaW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsPHN0cmluZz4gPSBuZXcgU2VsZWN0aW9uTW9kZWw8c3RyaW5nPih0cnVlKTtcblxuICAvKiogVG9nZ2xlcyBvbmUgc2luZ2xlIGRhdGEgbm9kZSdzIGV4cGFuZGVkL2NvbGxhcHNlZCBzdGF0ZS4gKi9cbiAgdG9nZ2xlKG5vZGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvbk1vZGVsLnRvZ2dsZShub2RlTmFtZSk7XG4gIH1cblxuICAvKiogRXhwYW5kcyBvbmUgc2luZ2xlIGRhdGEgbm9kZS4gKi9cbiAgZXhwYW5kKG5vZGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvbk1vZGVsLnNlbGVjdChub2RlTmFtZSk7XG4gIH1cblxuICAvKiogQ29sbGFwc2VzIG9uZSBzaW5nbGUgZGF0YSBub2RlLiAqL1xuICBjb2xsYXBzZShub2RlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25Nb2RlbC5kZXNlbGVjdChub2RlTmFtZSk7XG4gIH1cblxuICAvKiogV2hldGhlciBhIGdpdmVuIGRhdGEgbm9kZSBpcyBleHBhbmRlZCBvciBub3QuIFJldHVybnMgdHJ1ZSBpZiB0aGUgZGF0YSBub2RlIGlzIGV4cGFuZGVkLiAqL1xuICBpc0V4cGFuZGVkKG5vZGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbnNpb25Nb2RlbC5pc1NlbGVjdGVkKG5vZGVOYW1lKTtcbiAgfVxuXG4gIC8qKiBDb2xsYXBzZSBhbGwgZGF0YU5vZGVzIGluIHRoZSB0cmVlLiAqL1xuICBjb2xsYXBzZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvbk1vZGVsLmNsZWFyKCk7XG4gIH1cblxuICBleHBhbmRBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25Nb2RlbC5zZWxlY3QoLi4uT2JqZWN0LmtleXModGhpcy5fZGF0YS52YWx1ZS5jb21wb3VuZCB8fCB7fSkpO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhOiBOekdyYXBoRGF0YURlZik6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uTW9kZWw/LmNsZWFyKCk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gZGF0YTtcbiAgICB0aGlzLl9kYXRhLm5leHQoZGF0YSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBOekdyYXBoRGF0YURlZikge1xuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIHRoaXMuZXhwYW5zaW9uTW9kZWw/LmNsZWFyKCk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9kYXRhLm5leHQoc291cmNlKTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8TnpHcmFwaERhdGFEZWY+IHtcbiAgICBjb25zdCBjaGFuZ2VzID0gW3RoaXMuX2RhdGEsIHRoaXMuZXhwYW5zaW9uTW9kZWwuY2hhbmdlZF07XG4gICAgcmV0dXJuIG1lcmdlKC4uLmNoYW5nZXMpLnBpcGUobWFwKCgpID0+IHRoaXMuX2RhdGEudmFsdWUpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgLy8gZG8gbm90aGluZyBmb3Igbm93XG4gIH1cbn1cbiJdfQ==