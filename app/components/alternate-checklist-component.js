/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';
import EmberObject from '@ember/object';
import { setProperties } from '@ember/object';


export default class ChecklistComponentComponent extends Component {
    /**
        Method to construct this component and initialize the file objects and counts.
        @method constructor
        @return {void}
    */
    constructor() {
        super(...arguments);

        // Import the files argument from where it was called
        const filesObject = this.args.files;
        this.totalAvailable = 0;

        // Append the value property to the object, and initialize to false to 
        // correctly reflect that all checkboxes are false to begin with.
        // Also take this time to count the number of available files to update the total files.
        filesObject.forEach(item => {
            item.value = false;
            item.selected = false;

            if (item.status === "available") {
                this.totalAvailable += 1;
            }

            this.files.pushObject(EmberObject.create(item));
        });
    }

    /**
        An integer value that is tracking the total number of files that are selected.
        @property totalSelected
        @type {Integer}
        @default 0
    */
    @tracked totalSelected = 0;

    /**
        The total available files value calculated in the constructor.
        @property totalAvailable
        @type {Integer}
    */
    @tracked totalAvailable;

    /**
        The file object initialized in the constructor.
        @property files
        @type {Array} of {fileObjects}
    */
    @tracked files = A([]);

    /**
        The value of the master checkbox that controls the select/deselect all.
        @property masterCheckboxValue
        @type {Boolean}
    */
    @tracked masterCheckboxValue = false;

    /**
       The action associated with the master checkbox. Checks the current value of the
       masterCheckboxValue and either selects all or deselects all available files. If the
       current value is indeterminate, it will be set to true on selection. 
       @event toggleAction
       @return {void}
    */
    @action toggleAction() {
        //  
        if (!this.masterCheckboxValue) {
            this.files.forEach(file => {
                if (file.status === "available" && !file.value) {
                    file.setProperties({
                        selected: true,
                        value: true,
                    })
                    this.totalSelected += 1;
                }
            });
        }
        else if (this.masterCheckboxValue) {
            this.files.forEach(file => {
                if (file.status === "available" && file.value) {
                    file.setProperties({
                        selected: false,
                        value: false,
                    });
                    this.totalSelected -= 1;
                }
            });
        }
    }

    /**
       The action when the download button is pressed. Iterates to find all selected files and displays
       the information in an alert.
       @event downloadAlert
       @return {void}
    */
    @action downloadAlert() {
        const alertArr = [];
        let str = "";
        this.files.forEach(item => {
            if (item.value) {
                str = item.device + ": " + item.path;
                alertArr.push(str);
            }
        });

        alert(alertArr);
    }

    /**
       The action to update the tracked property, totalSelected to update the count of selected files.
       All file checkbox values are default to false (in constructor) and this flips the value in the file object.
       @event updateFileCount
       @param {Object} file The file object that is being selected/deselected
       @return {void}
    */
    @action updateFileCount(file) {
        if (file.status === "available") {
            file.setProperties({
                selected: !file.selected,
                value: !file.value,
            });

            // After flipping the value to reflect the correct state, ie false to true (unchecked to checked)
            // Update the count according to that reflected state.
            file.value ? this.totalSelected += 1 : this.totalSelected -= 1;
        }

        // After updating the checkbox value, iterate and check the total count of
        // all selected checkboxes to compare against total available
        let count = 0;
        this.files.forEach(file => {
            if (file.value) {
                count += 1;
            }
        });

        var masterCheckbox = document.getElementById("master-checkbox");

        if (count === this.totalAvailable) {
            masterCheckbox.indeterminate = false;
            this.masterCheckboxValue = true;
        }
        else if (count === 0) {
            masterCheckbox.indeterminate = false;
            this.masterCheckboxValue = false;
        }
        else if (count > 0 && count < this.totalAvailable) { 
            masterCheckbox.indeterminate = true;
            this.masterCheckboxValue = null;
        }
    }
}
