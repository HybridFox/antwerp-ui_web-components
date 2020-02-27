import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'cookie-category',
})
export class CookieCategory {
	@Prop() data: any[];
	@Prop() index: number;
	@Prop() onOpenCloseCategory: Function;
	@Prop() onCheckCategory: Function;

	loadCategoryItem = (item) => {
		return (
			<div class="category-item">
				<div class="category-item-nav u-margin-bottom-xs" onClick={() => this.onOpenCloseCategory(this.index)}>
					<div class="row">
						<div class="col-xs-8 category-item-name">
							<h2 class="h6"><span class={"fa fa-angle-" + (item.open ? "down" : "right")}></span>{item.name}</h2>
						</div>
						<div class="col-xs-4 u-text-right">
							<div class="a-input">
								<div class={item.showSwitch ? "a-switch" : ""}>
									<label class="a-switch__label">
										{(item.showSwitch ? ((item.enabled ? "In" : "Uit") + "geschakeld") : "Altijd ingeschakeld")}
									</label>
									{item.showSwitch &&
										<div class="a-switch__toggle">
											<input
												type="checkbox"
												name={"switch-" + item.name}
												id={"switch-" + item.name}
												role="switch"
												checked={item.enabled}
												onChange={(e) => this.onCheckCategory(this.index, e)} />
											<label htmlFor={"switch-" + item.name}>
												<span class="u-screen-reader-only">Toggle switch</span>
											</label>
										</div>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class={"category-item-description " + (item.open ? "open" : "")}>
					<p class="u-margin-bottom-xs">{item.description}</p>
					{item.cookies &&
						<cookie-table data={item}></cookie-table>
					}
				</div>
			</div>
		);
	}

	render() {
		return (
			this.loadCategoryItem(this.data)
		);
	}
}