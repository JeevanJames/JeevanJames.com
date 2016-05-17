var testimonials = [
    {
        quote: 'Jeevan is one of the exceptional techie I\'ve met. He has a great technical depth. When it comes to the latest developments in the MS Technical space, he would be always updated and ahead of time. His zeal for technology and his knowledge is one of his greatest assets. Above all even with this treasure of knowledge Jeevan is a very down to earth & friendly guy.',
        by: 'Vinod Nair',
        who: 'Product Management &amp; Solutions'
    },
    {
        quote: 'You spell out .Net, you will hear it as Jeevan. He is a physical google I have ever seen...',
        by: 'Ramanathan PL',
        who: 'Director Software Developer at ETF Securities'
    },
    {
        quote: 'Jeevan is a kind of guy who can bank on him on any sort of techinical work. He is a complete tech guy who knows almost all aspects of the technology he is working on.',
        by: 'Harish Achappa',
        who: 'Associate Architect at Thomson Reuters'
    },
    {
        quote: 'I worked with Jeevan for a couple of months, when he was in Belgium few times for a project at our company. On a work-related base, he\'s very professional, intelligent & to-the-point. If i could, i\'d want him in my team immediately. On a personal level, Jeevan is very sociable, fun to be with and \'sportive\'. When Jeevan wants something, he goes for it !',
        by: 'Wim Vandenbussche',
        who: 'Retail Business Consultant at Centric Belgium'
    },
];

jQuery(document).ready(function($) {


    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    /* jQuery RSS - https://github.com/sdepold/jquery-rss */

    $("#rss-feeds").rss(

        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",

        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,

        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',

        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",

        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'

        }
    );

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "JeevanJames");


    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "JeevanJames", selector: "#ghfeed" });

    var random = Math.floor(Math.random() * testimonials.length);
    var testimonial = testimonials[random];
    var quoteElement = $('#testimonial > blockquote.quote > p');
    var quoteHtml = quoteElement.html();
    quoteElement.html(quoteHtml + testimonial.quote);
    $('#testimonial > p.source > span.name').text(testimonial.by);
    $('#testimonial > p.source > span.title').text(testimonial.who);
});