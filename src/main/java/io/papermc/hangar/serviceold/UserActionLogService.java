package io.papermc.hangar.serviceold;

import io.papermc.hangar.db.customtypes.LoggedActionType;
import io.papermc.hangar.db.dao.HangarDao;
import io.papermc.hangar.db.dao.internal.LoggedActionsDAO;
import io.papermc.hangar.model.db.log.LoggedActionsOrganizationTable;
import io.papermc.hangar.model.db.log.LoggedActionsPageTable;
import io.papermc.hangar.model.db.log.LoggedActionsProjectTable;
import io.papermc.hangar.model.db.log.LoggedActionsUserTable;
import io.papermc.hangar.model.db.log.LoggedActionsVersionTable;
import io.papermc.hangar.modelold.viewhelpers.LoggedActionViewModel;
import io.papermc.hangar.util.RequestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Objects;

@Service("oldUserActionLogService")
public class UserActionLogService extends HangarService {

    private final HangarDao<LoggedActionsDAO> actionsDao;

    @Autowired
    public UserActionLogService(HangarDao<LoggedActionsDAO> actionsDao) {
        this.actionsDao = actionsDao;
    }

    public void project(HttpServletRequest request, LoggedActionType<LoggedActionType.ProjectContext> loggedActionType, String newState, String oldState) {
        LoggedActionsProjectTable log = new LoggedActionsProjectTable(
                getCurrentUser().getId(),
                RequestUtil.getRemoteInetAddress(request),
                loggedActionType.getValue(),
                newState,
                oldState,
                loggedActionType.getActionContext().getProjectId()
        );
        actionsDao.get().insertProjectLog(log);
    }

    public void projectPage(HttpServletRequest request, LoggedActionType<LoggedActionType.ProjectPageContext> loggedActionType, String newState, String oldState) {
        LoggedActionsPageTable log = new LoggedActionsPageTable(
                getCurrentUser().getId(),
                RequestUtil.getRemoteInetAddress(request),
                loggedActionType.getValue(),
                Objects.toString(newState, ""),
                Objects.toString(oldState, ""),
                loggedActionType.getActionContext().getProjectId(),
                loggedActionType.getActionContext().getPageId()
        );
        actionsDao.get().insertProjectPageLog(log);
    }

    public void version(HttpServletRequest request, LoggedActionType<LoggedActionType.VersionContext> loggedActionType, String newState, String oldState) {
        LoggedActionsVersionTable log = new LoggedActionsVersionTable(
                getCurrentUser().getId(),
                RequestUtil.getRemoteInetAddress(request),
                loggedActionType.getValue(),
                Objects.toString(newState, ""),
                Objects.toString(oldState, ""),
                loggedActionType.getActionContext().getProjectId(),
                loggedActionType.getActionContext().getVersionId()
        );
        actionsDao.get().insertVersionLog(log);
    }

    public void user(HttpServletRequest request, LoggedActionType<LoggedActionType.UserContext> loggedActionType, String newState, String oldState) {
        LoggedActionsUserTable log = new LoggedActionsUserTable(
                getCurrentUser().getId(),
                RequestUtil.getRemoteInetAddress(request),
                loggedActionType.getValue(),
                Objects.toString(newState, ""),
                Objects.toString(oldState, ""),
                loggedActionType.getActionContext().getUserId()
        );
        actionsDao.get().insertUserLog(log);
    }

    public void organization(HttpServletRequest request, LoggedActionType<LoggedActionType.OrganizationContext> loggedActionType, String newState, String oldState) {
        LoggedActionsOrganizationTable log = new LoggedActionsOrganizationTable(
                getCurrentUser().getId(),
                RequestUtil.getRemoteInetAddress(request),
                loggedActionType.getValue(),
                Objects.toString(newState, ""),
                Objects.toString(oldState, ""),
                loggedActionType.getActionContext().getOrganizationId()
        );
        actionsDao.get().insertOrganizationLog(log);
    }

    public List<LoggedActionViewModel<?>> getLog(Integer oPage, String userFilter, String projectFilter, String versionFilter, String pageFilter, String actionFilter, String subjectFilter) {
        long pageSize = 50L;
        long offset;
        if (oPage == null) {
            offset = 0;
        } else {
            offset = oPage * pageSize;
        }
        return actionsDao.get().getLog(userFilter, projectFilter, versionFilter, pageFilter, actionFilter, subjectFilter, offset, pageSize);
    }
}

