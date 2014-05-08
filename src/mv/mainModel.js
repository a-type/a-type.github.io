var MainModel = Backbone.Model.extend({
    defaults: {
        "numPages" : 3,
        "currentPage" : 0,
        "pageContent" : [],
    },

    initialize: function() {
        this.set("pageContent", 
            [
                {   header: 
                        { subtitle: "About me", 
                        description: "And this site"},
                    pageName: "frontPage"
                },
                {   header: 
                        { subtitle: "I develop for Windows devices and Web", 
                        description: "I love C#, JavaScript, and Java. Here's some stuff I've done:" },
                    pageName: "devPage"
                },
                {   header: 
                        { subtitle: "Acoustic or electronic", 
                        description: "I just like making nice sounds." },
                    pageName: "musicPage"
                }
            ]);
    }
});
