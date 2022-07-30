import React from "react";
import {Link, useNavigate} from "react-router-dom";

import {Box, Tab, Tabs, Typography} from "@material-ui/core";
import PropTypes from "prop-types";


// components


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function LibrarySetup() {
    const paths = ['setup/Collection', 'setup/Collection']

    const [value, setValue] = React.useState(0); // first tab
    let navigate = useNavigate();

    const handleChange = (_event, newValue) => {
        setValue(newValue);
        navigate(paths[newValue])

    }
    return (

        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                Library Setup
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto">

                    <div className="relative h-350-px ">
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs value={false}  onChange={handleChange}
                              className="text-blueGray-100 mb-1 text-xs font-semibold">
                                <Tab
                                    label="Infrastructure"
                                    component={Link}
                                    to="/setup/Infrastructure"
                                    value={false}/>
                                <Tab label="Collection" component={Link} to="setup/Collection" value={false}  {...a11yProps(1)} />
                                <Tab label="Human Resources" component={Link} to="setup/HumanResources" value={false} />
                                <Tab label="Finance" component={Link} to="setup/Finance" value={false} />
                            </Tabs>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}
