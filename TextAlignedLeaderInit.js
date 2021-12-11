function init(basePath) {
    var action = new RGuiAction(qsTranslate("TextAlignedLeader", "&Text-aligned leader"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile(basePath + "/TextAlignedLeader.js");
    action.setIcon(basePath + "/TextAlignedLeader.svg");
    action.setStatusTip(qsTranslate("TextAlignedLeader", "&TextAlignedLeader"));
    action.setDefaultShortcut(new QKeySequence("2,T"));
    action.setDefaultCommands(["TextAlignedLeader", "tal"]);
    action.setGroupSortOrder(160000);
    action.setSortOrder(103);
    action.setWidgetNames(["DimensionMenu", "DimensionToolBar", "DimensionToolsPanel", "DimensionMatrixPanel"]);
}