
const siteDirs = [];
const destDirs = [];

this.state = {
	walk: 'Generate HTML',
	siteDir: 'unknown',
	destDir: 'unknown',
	configSummary: [],
	value: 1
};

handleSiteDir(event, index, value) {
	this.setState({value});
	state.siteDir={event.target.innerHTML};
	siteDir={siteDirs[value].props.primaryText};
}

handleDestinationDir(event, index, value) {
	this.setState({value}, event.target.innerHTML);
	state.destDir={event.target.innerHTML};
	destDir={destDirs[value].props.primaryText};

<DropDownMenu
	value={this.state.value}
	onChange={this.handleSiteDir}
	autoWidth={true}
>
	{siteDirs}
</DropDownMenu>
