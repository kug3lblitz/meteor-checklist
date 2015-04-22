Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
    Template.body.helpers ({
        tasks: function () {
            return Tasks.find({});
        }
    });

    Template.body.events({
        "submit new.task": function (event) {
            
            //function called on form submit
            
        }
    })
}
