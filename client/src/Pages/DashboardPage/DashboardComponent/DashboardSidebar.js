import React, {useState} from 'react'
import * as MaterialUI from '@material-ui/core';
import DashboardSidebarCss from './DashboardSidebar.module.css'
import Aux from '../../../hoc/Auxiliary';

function DashboardSidebar() {

  //Check if active workspace
  const [active, setActive] = useState(true);
  function checkActive(){
    if(active === true){
      return DashboardSidebarCss.workspaceIconActive;
    }
  }

  return (
    <Aux>
      {/* sidebar1 */}
      <MaterialUI.Grid
        container
        xs={1} 
        spacing ={0} 
        alignItems = 'center'
        justify ='flex-start'
        direction ='column'
        className={DashboardSidebarCss.sideBarBorder}>

        <div className={DashboardSidebarCss.workspaceIconUser}>
          User
        </div>

        <div className={DashboardSidebarCss.workSpaceSeparator}>
        </div>

        <MaterialUI.Tooltip title="Workspace 1" placement="right-end">
          <div className={`${DashboardSidebarCss.workspaceIcon} ${checkActive()}`}>
            Work space 1
          </div>
        </MaterialUI.Tooltip>

        <MaterialUI.Tooltip title="Workspace 2" placement="right-end">
          <div className={DashboardSidebarCss.workspaceIcon}>
            Work space 2
          </div>
        </MaterialUI.Tooltip>

        <MaterialUI.Tooltip title="Workspace 3" placement="right-end">
          <div className={DashboardSidebarCss.workspaceIcon}>
            Work space 3
          </div>
        </MaterialUI.Tooltip>

      </MaterialUI.Grid>

      {/* sidebar2 */}
      <MaterialUI.Grid 
        container 
        md={2} 
        spacing ={0} 
        className={`${DashboardSidebarCss.sideBarBorder} ${DashboardSidebarCss.sidebar2Background}`}>
          Sidebar2
      </MaterialUI.Grid>
    </Aux> 
  )
}

export default DashboardSidebar;
