Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

    Template.body.helpers({
        tasks: function () {
            return Tasks.find({}, {sort: {createdAt: -1}});
        }
    });

    Template.body.events({
        "submit .new-task": function (event) {
            
            //function called on form submit
            var text = event.target.text.value;

            Tasks.insert({
                text: text,
                createdAt: new Date() // Date.now equivalent
            }); 

            //form clearing function
            event.target.text.value = "";

            //prevents default on form submittal
            return false;
        }
    });

    Template.task.events({
      "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Tasks.update(this._id, {$set: {checked: ! this.checked}});
      },
      "click .delete": function () {
        Tasks.remove(this._id);
      }
    });
}
