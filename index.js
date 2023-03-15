var mainButton = document.querySelector('#mainButton');
var todoLists = document.querySelector('.todoLists');
var remove = function (x) {
    var _a, _b;
    (_b = (_a = x.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
};
// edit
mainButton.addEventListener('click', function () {
    var div = document.createElement('div');
    var divCol = document.createElement('div');
    divCol.className = 'col';
    var divHead = document.createElement('div');
    divHead.className = 'border-bottom border-dark d-flex align-items-center p-2';
    var divButtons = document.createElement('div');
    divButtons.className = 'd-flex flex-column';
    var inpHead = document.createElement('input');
    inpHead.placeholder = 'Type List Name...';
    inpHead.className = 'text-center flex-grow-1 m-0';
    var listName = document.createElement('h2');
    listName.className = 'text-center flex-grow-1 m-0';
    inpHead.addEventListener('change', function () {
        var text = inpHead.value;
        inpHead.style.cssText = "display: none";
        listName.innerText = text;
        listName.style.cssText = "dislay: block";
        aEdit.style.cssText = "display: block";
    });
    inpHead.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            var text = inpHead.value;
            inpHead.style.cssText = "display: none";
            listName.innerText = text;
            listName.style.cssText = "dislay: block";
            aEdit.style.cssText = "display: block";
        }
    });
    divHead.append(inpHead);
    divHead.append(listName);
    var a = document.createElement('a');
    var aDelete = document.createElement('a');
    aDelete.className = 'p-1';
    aDelete.innerHTML = '<svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>';
    aDelete.addEventListener('click', function () {
        var _a, _b, _c;
        (_c = (_b = (_a = aDelete.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
    });
    var aEdit = document.createElement('a');
    aEdit.style.cssText = "display: none";
    aEdit.className = 'p-1';
    aEdit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>';
    aEdit.addEventListener('click', function () {
        aEdit.style.cssText = "display: none";
        listName.style.cssText = "display: none";
        inpHead.style.cssText = "display: block";
    });
    divHead.append(aEdit);
    divHead.append(aDelete);
    divButtons.append(aEdit);
    divButtons.append(aDelete);
    divHead.append(divButtons);
    a.innerHTML = '<a class="todoList text-center listButton"><div><svg class="m-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg></div></a>';
    a.addEventListener('click', function () {
        var _a;
        var inp = document.createElement('input');
        var div = document.createElement('div');
        div.className = 'd-flex align-items-center';
        var aDelete = document.createElement('a');
        aDelete.innerHTML = '<svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>';
        aDelete.addEventListener('click', function () { return remove(aDelete); });
        inp.placeholder = 'Type Here...';
        inp.className = 'flex-grow-1';
        inp.addEventListener('change', function () {
            var _a, _b, _c;
            var div = document.createElement('div');
            div.className = 'border-bottom border-dark d-flex align-items-center p-2';
            var aDelete = document.createElement('a');
            aDelete.innerHTML = '<svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>';
            aDelete.addEventListener('click', function () { return remove(aDelete); });
            var aChecked = document.createElement('a');
            aChecked.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/></svg>';
            aChecked.style.cssText = "display: none";
            aChecked.addEventListener('click', function () {
                var _a, _b, _c;
                (_c = (_b = (_a = aChecked === null || aChecked === void 0 ? void 0 : aChecked.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.style = '';
                aChecked.style.cssText = 'display: none';
                aCheck.style.cssText = 'dislay: block';
            });
            var aCheck = document.createElement('a');
            aCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/></svg>';
            aCheck.addEventListener('click', function () {
                var _a, _b, _c, _d;
                (_c = (_b = (_a = aCheck === null || aCheck === void 0 ? void 0 : aCheck.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.style = 'text-decoration: line-through';
                (_d = aCheck.parentElement) === null || _d === void 0 ? void 0 : _d.append(aChecked);
                aCheck.style.cssText = 'display: none';
                aChecked.style.cssText = 'display: block';
            });
            var text = inp.value;
            var li = document.createElement('li');
            li.innerText = text;
            li.style.cssText = 'overflow-wrap: anywhere';
            li.className = 'flex-grow-1 fs-5';
            div.append(li);
            var buttons = document.createElement('div');
            buttons.append(aDelete);
            buttons.append(aCheck);
            buttons.append(aChecked);
            buttons.className = 'd-flex flex-column';
            div.append(buttons);
            (_b = (_a = inp.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.insertBefore(div, inp.parentElement);
            (_c = inp.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
        });
        div.append(inp);
        var divDelete = document.createElement('div');
        divDelete.append(aDelete);
        div.append(divDelete);
        (_a = a.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(div, a);
    });
    div.append(divHead);
    div.append(a);
    div.className = 'todoList card d-flex flex-column';
    divCol.append(div);
    todoLists.insertBefore(divCol, mainButton.parentElement);
});
