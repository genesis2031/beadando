
//Viewmodel réteg
var statusTexts = {
    'new': 'Új',
    'done': 'Kész',
    'in_progress': 'Folyamatban'
};
var statusClasses = {
    'new': 'default',
    'done': 'success',
    'in_progress': 'info'
};



function decorateErrors(errorContainer) {
    return errorContainer.map(function (e) {
        e.statusText = statusTexts[e.status];
        e.statusClass = statusClasses[e.status];
        return e;
    });
}




module.exports = decorateErrors;