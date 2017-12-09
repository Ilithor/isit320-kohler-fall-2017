import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const siteDirs = [];
const destDirs = [];

var buttonStyle = {
    margin: '15px'
};

class MakeHtmlDropDowns extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            walk: 'Generate HTML',
            siteDir: 'unknown',
            destDir: 'unknown',
            configSummary: [],
            value: 1
        };

    }

    handleSiteDir(event, index, value) {
        this.setState({
            value: value,
            siteDir: event.target.innerHTML,
            destDir: destDirs[value].props.primaryText
        });
    }

    handleDestDir(event, index, value) {
        this.setState({
            value,
            siteDir: siteDirs[value].props.primaryText,
            destDir: event.target.innerHTML
        });
    }

    generateHTML = () => {
        console.log(this.state.value);
        console.log(siteDirs[this.state.value]);
        //walking.runWalkReact('qSingle', this.state.siteDir, this.state.destDir);
        const query = '/makers/walk?siteDirIndex=' + this.state.value;
        var that = this;
        fetch(query)
            .then(function (response) {
                return response.json();
            })
            .then(function (configSummary) {
                console.log(JSON.stringify(configSummary, null, 4));
                // CALL that.setState to **state.configSummary** to configSummary.htmlFilesWritten
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

//Object.keys(configSummary).map(function (key) { return configSummary[key]; });

    render() {
        console.log('DERP');
        return <MuiThemeProvider>
            <div>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleSiteDir}
                    autoWidth={true}
                >
                    {siteDirs}
                </DropDownMenu>

                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleDestinationDir}
                    autoWidth={true}
                >
                    {destDirs}
                </DropDownMenu>

                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.generateHTML}>{this.state.walk}</RaisedButton>
            </div>
        </MuiThemeProvider>;
    }
}

export default MakeHtmlDropDowns;