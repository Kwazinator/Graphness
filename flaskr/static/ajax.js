function small_sidebar(){
    if($(window).width() < 500) {
        $('#userEventTableDiv').on('show.bs.collapse', function () {
            $('#EventHeader').text("Events \u2228");
        });
        $('#EventHeader').text("Events \u2228");
        $("#userEventTableDiv").show();
        $('#userEventTableDiv').on('hidden.bs.collapse', function () {
            $('#EventHeader').text("Events \u2261");
        });
        // sidebar_kids = $(".sidebar").children();
        // //sidebar_kids
        // //console.log(sidebar_kids);
        // $.each(sidebar_kids, function(key, node) {
        //     $(".sidebar")[0].removeChild(node);
        // });

        // $(".sidebar")[0].insertAdjacentHTML("afterbegin", ""
        // + "<div class='accordion' id='clubAccordion'>"
        // + "    <a class='btn btn-block p-0' role='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='false' aria-controls='collapseOne'>"
        // +           sidebar_kids[0].outerHTML
        // + "    </a>"
        // + "</div>");

        // var sidebar_kids_listed = "";
        // $.each(sidebar_kids, function(key, node) {
        //     if( key != 0 )
        //     {
        //         sidebar_kids_listed += sidebar_kids[key].outerHTML;
        //     }
        // });
        // //console.log(sidebar_kids);

        // $(".sidebar").append(""
        // + "    <div id='collapseOne' class='collapse hide col-12 p-0' aria-labelledby='headingOne' data-parent='#clubAccordion'>"
        // +          sidebar_kids_listed      
        // + "    </div>"
        // + "  </div>"
        // + "</div>");
    }
}


function create_plotly_latest( playlist_id) {
    //console.log($(this)[0].url_for);
    $.getJSON(url_for.edit__editplaylist, {'action': 'lastanalytics'} ,function(json) 
    {
        //console.log(json)
        data = [
            {
                type: 'scatterpolar',
                r: [json.result.acousticness,json.result.danceability,json.result.energy,json.result.instrumentalness,json.result.liveness,json.result.valence],
                theta: ['Acoustivity','Danceability','Energility', 'Instrumentality', 'Lividity', 'Valence'],
                fill: 'toself',
                name: 'Analytics and stuff',
                line: {
                    color: '#563d7c'
                }
            }
        ]
        
        garbage = ['This','is', 'a', 'test', 'for', 'hover']

        layout = {
            title: json.title,
            paper_bgcolor: "rgb(173,181,189)",
            showbackground: false,
            polar: {
                bgcolor: "a99dbb",
                radialaxis: {
                    visible: false,
                    range: [0, 1],
                    color: "rgb(86,61,124)"
                },
                angularaxis: {
                    hoverinfo: 'garbage' //dont do nuffin
                }
            },
            font: {
                family: 'Dosis, sans-serif',
                size: 18,
                color: '#563d7c'
            }
        }

        Plotly.newPlot("plotlyGraphlatest", data, layout, {modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d'], displaylogo: false, showTips: true,  })
        $('#playlistAnalyticsLoudness').html("Average Loudness " + json.result.loudness);
        $('#playlistAnalyticsTempo').html("Average BPM " + json.result.tempo);
        $('#playlistAnalyticsnumsongs').html(json.numsongs + " Songs");
        //$('#playlistAnalyticslistsongs').html(json.songlist[0] + "*****NOT SURE HOW TO DISPLAY ALL ELEMENTS IN THE ARRAY*****");
        $('#playlistAnalyticslink').html("Listen: <a  target='_blank' href='https://www.youtube.com/playlist?list=" + json.link + "'>" + json.p_name + "</a>" );

        var stuff = $('.angularaxistick').slice(6);

        $.each( stuff, function(key, label)
        {

            //console.log(label);
            //nuffin still
            //stuff.addClass('tooltip');

        });

        //console.log($('.angularaxistick').slice(6));
    });
}

function shame() {

    club_id = $(this)[0].that[0].getAttribute('id');
    var shamery = $(this)[0].shamed
    $.getJSON(url_for.list__shame, {'club_id' : club_id} ,function(data)
    {
        if(shamery)
        {
            club_users_fill(data.sorted_users, data.admin_id, false);
        }
        else
        {
            club_users_fill(data.sorted_users, data.admin_id, true);
        }
    });
    $(this)[0].shamed = !$(this)[0].shamed;
}

function initialise( submit_modal_club ) {
    //console.log($(this)[0]);
    $('#carouselPlaylistCaptions').carousel({
        interval: false
    });

    $('#carouselPlaylist').carousel({
        interval: false
    });

    $('#userClubTableDiv').on('show.bs.collapse', function () {
      $('#clubHeader').text("Clubs \u2228");
    });
    $('#clubHeader').text("Clubs \u2228");
    $("#userClubTableDiv").show();
    $('#userClubTableDiv').on('hidden.bs.collapse', function () {
      $('#clubHeader').text("Clubs \u2261");
    });



    $('#userEventTableDiv').on('show.bs.collapse', function () {
      $('#EventHeader').text("Events \u2228");
    });
    $('#EventHeader').text("Events \u2228");
    $("#userEventTableDiv").show();
    $('#userEventTableDiv').on('hidden.bs.collapse', function () {
      $('#EventHeader').text("Events \u2261");
    });



    $("#error-club-create-modal").hide()
    $('#songs_per_user').hide();
    $('#editable_name_div').hide();
    $('#details-box').hide();
    $('#list-event :button').click(function() {
        var event_id = $(this).attr('id');
        var event_dirty = $(this).children().text().trim();
        var event_name = event_dirty.substr(0,event_dirty.length-6);

        fill_event_modal(event_id, event_name)
        //do stuff here to fill the song submit with the correct event info.
        // you will prolly need to edit fill_song_submit to beable to take events.
        
    });
    $('#list-club :button').click(function() {
        var club_id = $(this).attr('id');
        var club_dirty = $(this).children().text().trim();
        var club_name = club_dirty.substr(0,club_dirty.length-6);
        var club = $(this);
        $('#clubAccordion').collapse('hide');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $.ajax({
                url: url_for.club__latest_playlists,
                type: "get",
                headers: {'AJAX': 1},
                success: function(json) {
                    hide_club_details();
                    show_latest_playlists(json);
                },
                error: function(json) {
                    if(json.redirect) {
                        window.location.href = json.redirect;
                    }
                }
            });
            $.ajax({
                url: url_for.club__club_details,
                type: "get",
                headers: {'AJAX': 1},
                data: {'club_id': club_id},
                success: function(json) {
                    $('#clubId_song_submit').val(club_id);
                    $('#songSubmitClubTitle').html("Submit for " + club_name);
                    fill_song_submit_modal(club_id, json.songs_per_user);
                },
                error: function(json) {
                    if(json.redirect) {
                        window.location.href = json.redirect;
                    }
                }
            });


        } else {
            that = $(this);
            that.parent().find('button').removeClass('active');
            that.addClass('active');

            $('#clubAccordion').collapse('hide');

            $.ajax({
                url: url_for.club__club_details,
                type: "get",
                headers: {'AJAX': 1},
                data: {'club_id': club_id},
                success: function(json) {
                    hide_latest_playlist();
                    $('#editable_name_div').hide();
                    show_club_details(json, club_id, club_name,"current");
                },
                error: function(json) {
                    if(json.redirect) {
                        window.location.href = json.redirect;
                    }
                }
            });
        }
    });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

function hide_latest_playlist() {
    $('#list-latest-playlists-label').html("");
    $('#list-latest-playlists').hide();
}


function hide_club_details() {
    $('#songs_per_user').hide();
    $('#playlist_term').hide();
    $('#club_admin').hide();
    $('#clubPlaylistsList').html("");
    $('#clubUsersList').html("");
    $('#clubPlaylistsListLabel').html("");
    $.each($("#clubUsersListLabel").children(), function(key, node) {
        $("#clubUsersListLabel")[0].removeChild(node);
    });
    $('#clubUsersListLabel').hide();
    $('#admin_controls').hide();
    $('#club_link').hide();
    $('#editable_name_div').hide();
    $('#details-box').hide();
}

function show_latest_playlists(json) {
    $('#list-latest-playlists-label').html("");
    $('#list-latest-playlists').show();
    $('#submitSongModalBTN').attr("disabled", true);
    $('#list-latest-playlists-label').html("<h3 class='d-flex justify-content-center'>Last Published Playlist</h3>");
}

function show_club_details(json, club_id, club_name,lastflag) {
    $('#songs_per_user').show();
    //console.log($('.club_id'));
    $('#playlist_term').show();
    $('#current_new_songs_num').show();
    $('#playlist_date').show();
    $('#club_admin').show();
    $('#clubPlaylistsList').show();
    $('#clubUsersList').show();
    $('#clubPlaylistsListLabel').show();
    $('#clubUsersListLabel').show();
    $('#admin_controls').show();
    $('#club_link').show();
    $('#editable_name_div').show();
    $('#details-box').show();
    $('#playlist_date').html("");
    $('#songs_per_user').html("");
    $('#playlist_term').html("");
    $('#current_new_songs_num').html("");
    $('#club_admin').html("");
    $('#clubPlaylistsList').html("");
    $('#clubUsersList').html("");
    $('#clubPlaylistsListLabel').html("");
    $('#clubUsersListLabel').html("");
    $('#admin_controls').html("");
    $('#club_link').html("");
    $('#editable_name_div').html("");
    $('#submitSongModalBTN').removeAttr("disabled");
    $('#songSubmitClubTitle').html("Submit for " + club_name);
    $('#clubId_song_submit').val(club_id);
    if (lastflag === "last") {
        console.log('in last modal submit')
        fill_song_submit_last_modal(club_id, json.songs_per_user, club_name);
    } else {
        submit_modal_last = "0";
        fill_song_submit_modal(club_id, json.songs_per_user, club_name);
    }
    normie_club_details(json.songs_per_user, json.playlist_period, json.num_songs, json.publish_date);
    if (json.isAdmin == 1) {
        $('#admin_controls').html("<button class='btn btn-secondary float-right' id='adminButton'type='button'>Admin</button>");
        setAdminButtonListener(club_id, club_name, json.songs_per_user, json.playlist_period, json.users, json.admin_id)
    }
    else {
        $('#admin_controls').html("<button class='btn btn-secondary float-right' id='leaveButton' type='button'>Leave</button>");
        $('#leaveButton').click(function(){
            $('#clubId_leave').val(club_id);
            $('#leave_club_head').html("Leaving " + club_name);
            $('#leaveClubModal').modal("show");
        });
    }
    console.log(json);
    club_playlists_fill(json.playlists);
    club_users_fill(json.users, json.admin_id, false)

    $('#club_link').html("");
    $('#club_link').html($('#club_link').html()
    + "<input type='hidden' value='https://potm.rocks/invite/" + json.link + "' id='invite_link'>"
    + "<button class='btn btn-secondary' id='copy_invite_btn'>Copy Invite</button>");
    $('#copy_invite_btn').click(function() {
        var hidden_link = $("#invite_link").val();
        var $link = $("<input>");
        $("body").append($link);
        $link.val(hidden_link).select();
        document.execCommand("copy");
        $link.remove();
        $("#copy_invite_btn").attr("disabled", true);
        $("#copy_invite_btn").html("Copied!");
        setTimeout(
             function(){
                $("#copy_invite_btn").attr("disabled", false);
                $("#copy_invite_btn").html("Copy Invite");
             },
             1000
        );
    });
}

function club_users_fill(users, admin_id, shame){
    $('#clubUsersList').html("");
    url_list_shame_ = "shame('" + url_for.list__shame + "')"
    var btn_state = "";
    if(shame)
    {
        btn_state = "active"
    }
    $('#clubUsersListLabel').html(""
        + "<h5 class='col-6 col-lg-7'>Members</h5>"
        + "<button id='shame_btn' onclick=" + url_list_shame_ + " type='button' style='font-size:small' class='" + btn_state + " mx-2 mb-1 col-4 col-lg-4 btn btn-secondary' >SHAME!!</button>");

    $.each(users, function(key, user) {
        var usercontent = "<div class='align-self-end p-0 flex-grow-1 m-0 clubuser'>"+ user.name + '</div><div class="';

        if( shame && !user.cur_submitted)
        {
            usercontent += 'bg-danger rounded-lg">';
        }
        else
        {
            usercontent += 'bg-secondary rounded-lg">';
        }
        if( user.last_submitted )
        {
            usercontent += '<i class="em em-grinning mx-1 my-1"></i>';
        }
        else
        {
            usercontent += '<i class="em em-lying_face mx-1 my-1"></i>';
        }

        if( user.cur_submitted )
        {
            usercontent += '<i class="em em---1 mx-1 my-1"></i>';
        }
        else
        {
            usercontent += '<i class="em em--1 mx-1 my-1"></i>';
        }
        if(user.id == admin_id)
        {
            usercontent += '<i class="em em-crown mx-1 my-1"></i></div>';
        }
        else
        {
            usercontent += "<i href='#' style='visibility:hidden' class='em em-heart mx-1 my-1 kick' data-id='"+ user.id +"'></i></div>";
        }
        $('#clubUsersList').html($('#clubUsersList').html()
        + "<div id='" + user.id + user.name + "' class='rounded-lg m-0 pr-0 pl-2 py-0 list-group-item list-group-item-dark list-group-item-action'><div class='d-flex row m-0'>"
        + usercontent + "</div></div>");
    });
}

function club_playlists_fill(playlists){
    if($(window).width() >= 1024) {
        var playlists_info = ""
                + "<div>";
        var playlists_item = "<div>";
        $.each(playlists, function(key, playlist) {
            playlists_item += "<button type='button' id='" + playlist.id + "-playlistbutton' class='list-group-item list-group-item-action list-group-item-dark flex-column align-items-start' style='padding: 5px 5px 5px 5px;'>"
                + "<table><col width='180'><col width='70'><col width='30'><col width='100'><col width='60'><th>" + playlist.date + "</th><th class='tableplaylistheaders'>Listen </th><th class='tableplaylistheaders'><i id='" + playlist.id + "-spotifylink' class='fab fa-spotify fa-sm' style='vertical-align: -1px'></i>&nbsp</th>"
                + "<th class='tableplaylistheaders'><i id='" + playlist.id + "-youtubelink' class='fab fa-youtube fa-sm' style='vertical-align: -1px'></i></th>"
                + "</th><th class='tableplaylistdetails'><a href='#' id='" + playlist.id + "-displayPlaylistModalBTN' data-toggle='modal' data=target='displayPlaylistModal' class='float-right badge badge-warning'>"
                + "Details</a></th>"
                + "</table></button>";
        });

        playlists_item += "</div>";


        $('#clubPlaylistsList').html(playlists_item);
        $('#clubPlaylistsListLabel').html("<h5>Playlists</h5>");
        $.each(playlists, function(key, playlist) {
            setPlaylistDetailsListeners(playlist.id, playlist.link, playlist.spotify_link);
        });
    } else {
        $.each(playlists, function(key, playlist) {
        $('#clubPlaylistsList').html($('#clubPlaylistsList').html()
            + "<a id='"+ playlist.id +"' href='https://www.youtube.com/playlist?list="+ playlist.link +"' target='_blank' class='list-group-item list-group-item-action list-group-item-dark flex-column align-items-start'>"
            + "<h6 class='mb-0'>Created: " + playlist.date + " <br/>Songs: " + playlist.song_count + "</h6></a>");
        });
        $('#clubPlaylistsListLabel').html("<h5>Club Playlists</h5>");
    }

}

function setAdminButtonListener(club_id, club_name, songs_per_user, playlist_period, users, admin_id) {
    var users_to_kick = new Set();
    var list_items_remove = new Set();
    $('#adminButton').click(function(){
        var that = $(this);
        var btnText = that.html();
        if(btnText == "Admin") {
            club_users_fill(users, admin_id, false);
            that.addClass("btn-danger")
            that.html("Confirm");
            $('#songs_per_user').html(""
                +"<div class='input-group-prepend'>"
                +    "<label class='input-group-text pr-1 bg-secondary' for='songs_per_user_edit'>Songs/User:</label>"
                +"</div>"
                +"<select class='custom-select pl-1 bg-secondary' id='songs_per_user_edit' name='songs_per_user_edit' data-width='fit'>"
                +    "<option selected value='" + songs_per_user + "'>" + songs_per_user + "</option>"
                +    "<option value='1'>1</option>"
                +    "<option value='2'>2</option>"
                +    "<option value='3'>3</option>"
                +    "<option value='4'>4</option>"
                +    "<option value='5'>5</option>"
                +"</select>");
            $('#playlist_term').html(""
                +"<select class='custom-select bg-secondary' id='playlist_term_edit' name='playlist_term_edit' data-width='fit'>"
                +    "<option selected value='" + playlist_period + "'>" + plist_period(playlist_period) + "</option>"
                +    "<option value='1'>Weekly</option>"
                +    "<option value='2'>Every Other Week</option>"
                +    "<option value='3'>Monthly</option>"
                +    "<option value='4'>Every Other Month</option>"
                +"</select>");
            $('#editable_name_div').show();
            $('#editable_name_div').html("<div class='input-group'>"
                + "<input id='club_name_edit' type='text' class='form-control' placeholder='" + club_name + "' aria-label='"+ club_name +"' aria-describedby='playlistName'>"
                + "<span class='input-group-btn' style='padding-left: 5em'><button class='btn btn-danger float-right' id='deleteClubButtonModal' type='button'>Delete Club</button></span></div>");
            $('#deleteClubButtonModal').click(function(){
                $('#clubId_delete').val(club_id);
                $('#delete_club_head').html("Deleting " + club_name);
                $('#deleteClubModal').modal("show");
            });
            $('.kick').css("visibility","visible");
            $('.kick').click(function() {
                if($(this).hasClass("em-heart")) {
                    $(this).removeClass("em-heart");
                    $(this).addClass("em-broken_heart");
                    users_to_kick.add($(this).data("id"));
                    list_items_remove.add($(this).parent().attr('id'));
                } else {
                    $(this).addClass("em-heart");
                    $(this).removeClass("em-broken_heart");
                    users_to_kick.delete($(this).data("id"));
                    list_items_remove.delete($(this).parent().attr('id'));
                }
            });
        } else if (btnText == "Confirm") {
            that.html("Admin");
            that.addClass("btn-secondary")
            that.removeClass("btn-danger")
            var songs_per_user_vlu = $('#songs_per_user_edit').val();
            var playlist_term_value = $('#playlist_term_edit').val();
            var club_name_value = $('#club_name_edit').val();
            if($.trim(club_name_value) != '') {
                $('#' + club_id).html("<h5 class='m-0 py-1 pl-2'>"
                + club_name_value + "<a href='#' data-toggle='modal' data-target='#submitSongModal' "
                + "class='submit-btn float-right badge badge-warning'>Submit</a></h5>");
                club_name = club_name_value;
            }
                fill_song_submit_modal(club_id, songs_per_user_vlu)
            normie_club_details(songs_per_user_vlu, playlist_term_value);
            $('#editable_name_div').html("");
            $('.kick').unbind();
            $('.kick').css("visibility","hidden");
            $.ajax({
                url: url_for.edit__editclub,
                type: "POST",
                headers: {'AJAX': 1},
                data: { 'club_id': club_id, 'name': club_name_value, 'songs_per': songs_per_user_vlu, 'playlist_term': playlist_term_value, 'action': 'update', 'user_ids': JSON.stringify([...users_to_kick]) },
                success: function(json){
                    list_items_remove.forEach(function(value) {
                        $('#'+ value).remove();
                    });
                    users_to_kick = new Set();
                    list_items_remove = new Set();
                },
                error: function(json) {
                    console.log(json.error);
                    users_to_kick = new Set();
                    list_items_remove = new Set();
                    if(json.redirect) {
                        window.location.href = json.redirect;
                    }
                }
            });
            club_users_fill(users, admin_id, false);
            //TODO users not being removed after edit
        }
    });
}

function normie_club_details(songs_per_user, playlist_period, num_songs, publish_date) {
    if (num_songs >= 0) {
        $('#current_new_songs_num').html(""
            +"<div class='input-group'>"
            +    "<label class='input-group-text bg-secondary' for='playlist_term_edit'># Submitted Songs: " + num_songs + "</label>"
            +"</div>");
    }
    if (publish_date) {
        $('#playlist_date').html(""
            +"<div class='input-group'>"
            +    "<label class='input-group-text bg-secondary' for='playlist_term_edit'>Publish Date: " + publish_date + "</label>"
            +"</div>");
    }
    $('#songs_per_user').html(""
        +"<div class='input-group'>"
        +    "<label class='input-group-text bg-secondary' for='playlist_term_edit'>Songs/User: " + songs_per_user + "</label>"
        +"</div>");
    $('#playlist_term').html(""
        +"<div class='input-group'>"
        +    "<label class='input-group-text bg-secondary' for='playlist_term_edit'>" + plist_period(playlist_period) +"</label>"
        +"</select>");
}

function plist_period(period) {
    var text_return;
    switch(period.toString()){
        case "1":
            text_return = "Weekly";
            break;
        case 1:
            text_return = "Weekly";
            break;
        case "2":
            text_return = "Every Other Week";
            break;
        case "3":
            text_return = "Monthly";
            break;
        case "4":
            text_return = "Every Other Month";
            break;
        default:
            text_return = period.toString();
    }
    return text_return
}

function fill_song_submit_last_modal(club_id, allowed_songs) {
    $.ajax({
        url: url_for.list__club_user_songs,
        headers: {'AJAX': 1},
        type: "get",
        data: {'club_id': club_id, 'last': 'true'},
        success: function(json) {
            var submitted_songs = json.user_songs;
            var tab_num = parseInt(allowed_songs);
            //console.log(json);
            //console.log(url_for.list__club_user_songs);
            //console.log(submitted_songs);
            //console.log(tab_num);
            if(submitted_songs.length > parseInt(allowed_songs)) {
                tab_num = submitted_songs.length;
            }
            var tab_content = "";
            var nav_tabs = "";
            for (i = 1; i <= tab_num; i++) {
                var icon = "";
                if(submitted_songs[i-1]) {
                    tab_content = tab_content + addSongTab(i, submitted_songs[i-1]);
                    icon = "<i id='song" + i + "_icon' class='fa fa-check' style='color: #008000'></i>"
                } else {
                    tab_content = tab_content + addEmptySongTab(i);
                    icon = "<i id='song" + i + "_icon' class='fa fa-times' style='color: #FF0000'></i>"
                }
                if(i == 1) {
                    nav_tabs = nav_tabs + "<li class='nav-item'><a class='nav-link active' data-toggle='tab' role='tab' href='#song" + i + "'>" + icon + "&nbsp; Song " + i + "</a></li>"
                } else {
                    nav_tabs = nav_tabs + "<li class='nav-item'><a class='nav-link' data-toggle='tab' role='tab' href='#song" + i + "'>" + icon + "&nbsp; Song " + i + "</a></li>"
                }
            }
            $('#song_nav').html(nav_tabs);
            $('#song_tab_content').html(tab_content);
            $('#submit_song_btn').attr('name','club')
            for (i = 1; i <= tab_num; i++) {
                var num = i;
                setAutoFillSongListener(num, club_id);
            }
        },
        error: function(json) {
            if(json.redirect) {
                window.location.href = json.redirect;
            }
        }
    });
}

function fill_event_modal(event_id, event_name) {
    $.ajax({
        url: url_for.edit_editevent,
        headers: {'AJAX': 1},
        type: "get",
        data: {'event_id': event_id, 'action': 'discover'},
        success: function(json) {
            var submitted_songs = json.user_songs;
            var tab_num = parseInt(json.allowed_songs);
            if(submitted_songs.length > parseInt(json.allowed_songs)) {
                tab_num = submitted_songs.length;
            }
            var tab_content = "";
            var nav_tabs = "";
            for (i = 1; i <= tab_num; i++) {
                var icon = "";
                if(submitted_songs[i-1]) {
                    tab_content = tab_content + addSongTab(i, submitted_songs[i-1]);
                    icon = "<i id='song" + i + "_icon' class='fa fa-check' style='color: #008000'></i>"
                } else {
                    tab_content = tab_content + addEmptySongTab(i);
                    icon = "<i id='song" + i + "_icon' class='fa fa-times' style='color: #FF0000'></i>"
                }
                if(i == 1) {
                    nav_tabs = nav_tabs + "<li class='nav-item'><a class='nav-link active' data-toggle='tab' role='tab' href='#song" + i + "'>" + icon + "&nbsp; Song " + i + "</a></li>"
                } else {
                    nav_tabs = nav_tabs + "<li class='nav-item'><a class='nav-link' data-toggle='tab' role='tab' href='#song" + i + "'>" + icon + "&nbsp; Song " + i + "</a></li>"
                }
            }
            $('#clubId_song_submit').val(event_id);
            $('#song_nav').html(nav_tabs);
            $('#song_tab_content').html(tab_content);
            $('#songSubmitClubTitle').html("Submit for " + event_name);
            $('#submit_song_btn').attr('name','event')
            for (i = 1; i <= tab_num; i++) {
                var num = i;
                setAutoFillSongListener(num, event_id);
            }
        },
        error: function(json) {
            if(json.redirect) {
                window.location.href = json.redirect;
            }
        }
    });





}

function fill_song_submit_modal(club_id, allowed_songs) {
    $.ajax({
        url: url_for.list__club_user_songs,
        headers: {'AJAX': 1},
        type: "get",
        data: {'club_id': club_id,'last':'false'},
        success: function(json) {
            var submitted_songs = json.user_songs;
            var tab_num = parseInt(allowed_songs);
            //console.log(json);
            //console.log(url_for.list__club_user_songs);
            //console.log(submitted_songs);
            //console.log(tab_num);
            if(submitted_songs.length > parseInt(allowed_songs)) {
                tab_num = submitted_songs.length;
            }
            var tab_content = "";
            var nav_tabs = "";
            for (i = 1; i <= tab_num; i++) {
                var icon = "";
                if(submitted_songs[i-1]) {
                    tab_content = tab_content + addSongTab(i, submitted_songs[i-1]);
                    icon = "<i id='song" + i + "_icon' class='fa fa-check' style='color: #008000'></i>"
                } else {
                    tab_content = tab_content + addEmptySongTab(i);
                    icon = "<i id='song" + i + "_icon' class='fa fa-times' style='color: #FF0000'></i>"
                }
                if(i == 1) {
                    nav_tabs = nav_tabs + "<li class='nav-item'><a class='nav-link active' data-toggle='tab' role='tab' href='#song" + i + "'>" + icon + "&nbsp; Song " + i + "</a></li>"
                } else {
                    nav_tabs = nav_tabs + "<li class='nav-item'><a class='nav-link' data-toggle='tab' role='tab' href='#song" + i + "'>" + icon + "&nbsp; Song " + i + "</a></li>"
                }
            }
            $('#song_nav').html(nav_tabs);
            $('#song_tab_content').html(tab_content);
            $('#submit_song_btn').attr('name','club')
            for (i = 1; i <= tab_num; i++) {
                var num = i;
                setAutoFillSongListener(num, club_id);
            }
        },
        error: function(json) {
            if(json.redirect) {
                window.location.href = json.redirect;
            }
        }
    });
}

function addSongTab(num, song) {
    var tab = "";
    var songlinktoadd = "";
    if(num == 1) {
        tab = "<div id='song" + num + "' class='tab-pane fade show active' role='tabpanel' >";
    } else {
        var tab = "<div id='song" + num + "' class='tab-pane fade' role='tabpanel' >";
    }
    if (song.song_link_type == "spotify") {
        songlinktoadd = "open.spotify.com/track/" + song.link
    } else {
        songlinktoadd = "youtube.com/watch?v=" + song.link
    }
    tab = tab + "<div class='alert alert-dismissible fade show' role='alert' hidden='hidden'></div>"
    tab = tab + "<form id='submit-song-form" + num + "' >"
          + "<div class='row mx-0'><label for='song_link" + num + "' class='col-form-label'>Youtube or Spotify Link</label>"
          + "<input class='form-control' name='song_link' id='song_link" + num + "' value='" + songlinktoadd + "' required></div>"
          + "<div class='row mx-0'><label for='song_name" + num + "' class='col-form-label'>Name</label>"
          + "<input class='form-control' name='song_name' id='song_name" + num + "' value='" + song.name + "' required></div>"
          + "<div class='row mx-0'><label for='song_artist" + num + "' class='col-form-label'>Artist</label>"
          + "<input class='form-control' name='song_artist' id='song_artist" + num + "' value='" + song.artist + "' required></div>"
          + "<input class='form-control' name='song_id' type='hidden' value='" + song.id + "'></form></div>";
    return tab;
}

function addEmptySongTab(num) {
    var tab = "";
    if(num == 1) {
        tab = "<div id='song" + num + "' class='tab-pane fade show active'>";
    } else {
        var tab = "<div id='song" + num + "' class='tab-pane fade'>";
    }
    tab = tab + "<div class='alert alert-dismissible fade show' role='alert' hidden='hidden'></div>"
    tab = tab + "<form id='submit-song-form" + num + "' >"
          + "<div class='row mx-0'><label for='song_link" + num + "' class='col-form-label'>Youtube or Spotify Link</label>"
          + "<input class='form-control' name='song_link' id='song_link" + num + "' required></div>"
          + "<div class='row mx-0'><label for='song_name" + num + "' class='col-form-label'>Name</label>"
          + "<input class='form-control' name='song_name' id='song_name" + num + "' required></div>"
          + "<div class='row mx-0'><label for='song_artist" + num + "' class='col-form-label'>Artist</label>"
          + "<input class='form-control' name='song_artist' id='song_artist" + num + "' required></div></form></div>"
    return tab;
}

function setAutoFillSongListener(num, club_id) {
    $('#song_link' + num).on('input', function() {
        autoFillSong(num, $(this).val(), club_id);
    });
}

function askSpotifyPlaylist(title, club_id) {
    var artist = '';
    var name = '';
    $.ajax({
            url: url_for.spotify_lookups__index,
            type: "POST",
            async: false,
            data: { 'name': title, 'club_id': club_id },
            success: function(json){
                name = json.names[0];
                artist = json.artists[0];
                submit_details = json.submit_details;
            }
    });
    return [name, artist,submit_details]
}

function askSpotifyPlaylistSearch(json, callback) {

    var listItems = "";
    for(var i = 0; i < json.items.length; i++) {
        var artist = '';
        var name = '';
        $.ajax({
            url: url_for.spotify_lookups__index,
            type: "GET",
            data: { 'name': json.items[i].snippet.title, 'club_id': 0 },
            success: function(json2){
                listItems = listItems + callback(json2.names[0],json2.artists[0], i, json);
            }
        });
    }
    $('#search_video_grid').html(listItems + "</div>");
    setSearchSubmitListeners()
}

function askSpotifyPlaylistVideoDetails(title, club_id, base_title, base_artist, callback) {
    var artist = '';
    var name = '';
    $.ajax({
            url: url_for.spotify_lookups__index,
            type: "POST",
            data: { 'name': title, 'club_id': club_id },
            success: function(json){
                return callback(json.names[0],json.artists[0], base_title, base_artist, search_submit_ask_spotify_callback);
            }
    });
}

function callback_spotify(name, artist) {
    return [name, artist]
};

function autoFillSong(num, value, club_id) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var regExpSpot = /(([a-zA-Z0-9\/:]+|)open.spotify.com\/(track)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/;
    var match = value.match(regExp);
    var matchspot = regExpSpot.test(value)
    if (matchspot) {
        $.ajax({
            url: "/spotify_lookup/autofill",
            headers: {'AJAX': 1},
            data: {'link': value},
            type: "GET",
            success: function(json){
               var title = json.title
               var artist = json.artist
               $('#song_name' + num).val(title);
               $('#song_artist' + num).val(artist);
               doAlert($('#song_tab_content .active').find(".alert"), "Youtube Match Found!", "alert-success");
            }
        });

    }
    else if (match && match[7] && match[7].length == 11) {
        var video_id = match[7];
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + video_id + "&key=AIzaSyDMa7u2uL8MCW2Pcwc3-jp_XDy4_bBIn4A",
            type: "GET",
            success: function(json){
               var title = json.items[0].snippet.title;
               var artist = json.items[0].snippet.channelTitle;
               spotify_info = askSpotifyPlaylist(title,club_id);
               if (spotify_info[0] && spotify_info[1]) {
                   $('#song_name' + num).val(spotify_info[0]);
                   $('#song_artist' + num).val(spotify_info[1]);
                   console.log(spotify_info[2]);
                   if (spotify_info[2] != "") {
                       doAlert($('#song_tab_content .active').find(".alert"), spotify_info[2], "alert-warning");
                   } else {
                       doAlert($('#song_tab_content .active').find(".alert"), "Spotify Match Found!", "alert-success");
                   }
               } else {
                   $('#song_name' + num).val(title);
                   $('#song_artist' + num).val(artist);
                   console.log(spotify_info[2]);
                   if (spotify_info[2] != "") {
                       doAlert($('#song_tab_content .active').find(".alert"), spotify_info[2], "alert-warning");
                   } else {
                       doAlert($('#song_tab_content .active').find(".alert"), "Spotify Match Found!", "alert-success");
                   }
               }
            }
        });
    }
}

function fillsong(name, artist, num, song_was_submitted) {
    if (name && artist) {
        if ( song_was_submitted )
        {
            $('#song_name' + num).val(name);
            $('#song_artist' + num).val(artist);
            doAlert($('#song_tab_content .active').find(".alert"), "Spotify Match Found! </br>" + song_was_submitted, "alert-info");

        } else {
            $('#song_name' + num).val(name);
            $('#song_artist' + num).val(artist);
            doAlert($('#song_tab_content .active').find(".alert"), "Spotify Match Found!", "alert-success");
        }
    } else {
        $('#song_name' + num).val(name);
        $('#song_artist' + num).val(artist);
        doAlert($('#song_tab_content .active').find(".alert"), "No Spotify Match Found", "alert-warning");
    }
}

function add_song(club_id, json_obj, url_to, alert, form_obj,icon_id) {
    if(json_obj["song_link"]) {
        if(json_obj["song_name"]) {
            if(json_obj["song_artist"]) {
                $.ajax({
                    url: url_to,
                    type: "POST",
                    headers: {'AJAX': 1},
                    data: { 'club_id': club_id, 'action': 'create', 'title': json_obj["song_name"], 'artist': json_obj["song_artist"], 'link': json_obj["song_link"] },
                    success: function(json){
                       if(json.response.id) {
                            form_obj.append("<input class='form-control' name='song_id' type='hidden' value='" + json.response.id + "'>")
                            updateTabIcon(icon_id),
                            doAlert(alert, "Song Added!", "alert-success");
                       } else {
                            doAlert(alert, json.response, "alert-danger");
                       }
                    },
                    error: function(json) {
                        doAlert(alert, json.error, "alert-danger");
                        if(json.redirect) {
                            window.location.href = json.redirect;
                        }
                    }
                });
            } else {
                doAlert(alert, "Artist needed", "alert-danger");
            }
        } else {
            doAlert(alert, "Name needed", "alert-danger");
        }
    } else if (json_obj["song_name"] || json_obj["song_artist"]) {
        doAlert(alert, "Link needed", "alert-danger");
    }
}

function add_last_song(club_id, json_obj, alert, form_obj, icon_id) {
    if(json_obj["song_link"]) {
        if(json_obj["song_name"]) {
            if(json_obj["song_artist"]) {
                $.ajax({
                    url: url_for.edit__editsong,
                    type: "POST",
                    headers: {'AJAX': 1},
                    data: { 'club_id': club_id, 'action': 'createlast', 'title': json_obj["song_name"], 'artist': json_obj["song_artist"], 'link': json_obj["song_link"] },
                    success: function(json){
                       if(json.response.id) {
                            form_obj.append("<input class='form-control' name='song_id' type='hidden' value='" + json.response.id + "'>")
                            updateTabIcon(icon_id),
                            doAlert(alert, "Song Added!", "alert-success");
                       } else {
                            doAlert(alert, json.response, "alert-danger");
                       }
                    },
                    error: function(json) {
                        doAlert(alert, json.error, "alert-danger");
                        if(json.redirect) {
                            window.location.href = json.redirect;
                        }
                    }
                });
            } else {
                doAlert(alert, "Artist needed", "alert-danger");
            }
        } else {
            doAlert(alert, "Name needed", "alert-danger");
        }
    } else if (json_obj["song_name"] || json_obj["song_artist"]) {
        doAlert(alert, "Link needed", "alert-danger");
    }
}


function update_song(club_id, json_obj, url_to, alert) {
    if(json_obj["song_link"]) {
        if(json_obj["song_name"]) {
            if(json_obj["song_artist"]) {
                $.ajax({
                    url: url_to,
                    type: "POST",
                    headers: {'AJAX': 1},
                    data: { 'club_id': club_id, 'action': 'update', 'song_id': json_obj["song_id"], 'title': json_obj["song_name"], 'artist': json_obj["song_artist"], 'link': json_obj["song_link"] },
                    success: function(json){
                       if(json.response.id) {
                            doAlert(alert, "Song Updated!", "alert-success");
                       } else {
                            doAlert(alert, json.response, "alert-danger");
                       }
                    },
                    error: function(json) {
                        doAlert(alert, json.error, "alert-danger");
                        if(json.redirect) {
                            window.location.href = json.redirect;
                        }
                    }
                });
            } else {
                doAlert(alert, "Artist needed", "alert-danger");
            }
        } else {
            doAlert(alert, "Name needed", "alert-danger");
        }
    } else {
        doAlert(alert, "Link needed", "alert-danger");
    }
}

function doAlert(alert, message, class_name) {
    alert.html(message);
    alert.removeClass("alert-primary");
    alert.removeClass("alert-secondary");
    alert.removeClass("alert-success");
    alert.removeClass("alert-danger");
    alert.removeClass("alert-warning");
    alert.removeClass("alert-info");
    alert.removeClass("alert-light");
    alert.removeClass("alert-dark");
    alert.addClass(class_name);
    alert.removeAttr("hidden");
}

function updateTabIcon(icon_id) {
    if ($("#"+ icon_id).hasClass("fa-times")) {
        $("#"+ icon_id).removeClass("fa-times");
        $("#"+ icon_id).addClass("fa-check");
        $("#"+ icon_id).css('color', '#008000');
    }
}

function getUserClubs(callback) {
    $.ajax({
        url: url_for.club__user_clubs,
        type: "get",
        headers: {'AJAX': 1},
        success: function(json) {
            return callback(json.clubs);
        },
        error: function(json) {
            if(json.redirect) {
                window.location.href = json.redirect;
            }
        }
    });
}

function update_like_num(songlikes) {
    playlist_Display_like_num = "";
    index = 0;
    $.each(songlikes, function(key, like_num) {
        $('#displayPlaylistModalLikes' + index).html(like_num);
        index += 1;
    });
}


function fill_playlist_like_song(index,ids,callback) {
    $("#"+ index + "-playlistLikeSong").click(function() {
        $.ajax({
            url: url_for.edit__editplaylist,
            type: "POST",
            headers: {'AJAX': 1},
            data: { 'song_id': ids, 'action': 'like', 'emoji_id': '1'},
            success: function(json) {
                return callback(json.songlikes)
            },
            error: function(json) {
            }
        });
    });
}

function setPlaylistDetailsListeners(id,youtubelink,spotifylink) {
    $('#' + id + '-youtubelink').click(function() {
        var win = window.open('https://www.youtube.com/playlist?list=' + youtubelink, '_blank');
        win.focus();
    });
    $('#' + id + '-spotifylink').click(function() {
        var win = window.open('https://open.spotify.com/playlist/' + spotifylink, '_blank');
        win.focus();
    });
    $('#' + id + '-displayPlaylistModalBTN').click(function() {
        $.ajax({
            url: url_for.edit__editplaylist,
            type: "GET",
            headers: {'AJAX': 1},
            data: { 'playlist_id': id, 'action': 'getanalytics'},
            success: function(json) {
                data = [
                    {
                        type: 'scatterpolar',
                        r: [json.result.acousticness,json.result.danceability,json.result.energy,json.result.instrumentalness,json.result.liveness,json.result.valence],
                        theta: ['Acoustivity','Danceability','Energility', 'Instrumentality', 'Lividity', 'Valence'],
                        fill: 'toself',
                        name: 'Analytics and stuff',
                        line: {
                            color: '#563d7c'
                        }
                    }
                ]

                garbage = ['This','is', 'a', 'test', 'for', 'hover']

                layout = {
                    title: "Attributes of Playlist",
                    paper_bgcolor: "rgb(173,181,189)",
                    width: 450,
                    height: 400,
                    showbackground: false,
                    polar: {
                        bgcolor: "a99dbb",
                        radialaxis: {
                            visible: false,
                            range: [0, 1],
                            color: "rgb(86,61,124)"
                        },
                        angularaxis: {
                            hoverinfo: 'garbage' //dont do nuffin
                        }
                    },
                    font: {
                        family: 'Dosis, sans-serif',
                        size: 18,
                        color: '#563d7c'
                    }
                }
                playlist_Display_Songs = "";
                playlist_Display_Artists = "";
                playlist_Display_like = "";
                playlist_Display_like_num = "";
                $.each(json.songlist, function(key, song) {
                    playlist_Display_Songs += "<th style='text-align:center; padding: 5px 10px;'>"
                                                  + song
                                            + "</th>";
                });
                $.each(json.artistlist, function(key, artist) {
                    playlist_Display_Artists += "<th style='text-align:center; padding: 5px 10px;'>"
                                                  + artist
                                            + "</th>";
                });
                var index = 0;
                $.each(json.songids, function(key, ids) {
                    playlist_Display_like += "<th style='text-align:center; padding: 5px 10px;'><a href='#' id='" + index + "-playlistLikeSong' class='badge badge-warning'>"
                                            + "Like</a> &nbsp;<div id='displayPlaylistModalLikes" + index + "' style='display: inline;'>" + json.songlikes[index]  + "</div></th>";
                    index += 1;
                });
                $.each(json.songlikes, function(key, like_num) {
                    playlist_Display_like_num += "<th style='text-align:center; padding: 5px 10px;'>" + like_num + "</th>";
                });
                $('#displayPlaylistModalTitle').html(json.title + " Details");
                $('#displayPlaylistModalSongs').html(playlist_Display_Songs);
                $('#displayPlaylistModalLikes').html(playlist_Display_like);
                var index = 0;
                $.each(json.songids, function(key, ids) {
                    fill_playlist_like_song(index,ids,update_like_num);
                    index += 1;
                });
                $('#displayPlaylistModalArtists').html(playlist_Display_Artists);
                Plotly.newPlot("displayPlaylistModalAnalytics", data, layout, {modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d'], displaylogo: false, showTips: true,  })
                $('#displayPlaylistModal').modal('show');
            },
            error: function(json) {
            }
        });
    });


}

function setSearchSubmitListeners() {
    $('#search_video_grid .btn').click(function() {
        //console.log($(this).parent());
        var video_id = $(this).parent().find('input').val();
        //console.log(video_id);
        $('#video_id_search').val(video_id);
        getUserClubs(function(clubs) {
            $('#search-dropdown-items').html('');
            //console.log(clubs);
            $.each(clubs, function(i, club) {
                $('#search-dropdown-items').html($('#search-dropdown-items').html()
                    + "<button class='dropdown-item' data-id='" + club.id + "'>" + club.name + "</button>"
                );
            });
            setSearchDropDownListeners();
            $('#searchSubmitModal').modal('show');
        });
    });
}

function setSearchDropDownListeners() {
    $('#search-dropdown-items .dropdown-item').click(function() {
        var club_name = $(this).html();
        var club_id = $(this).data("id");
        console.log(url_for.club__user_club_song_status);
        $('#active_club_to_submit').val(club_id);
        $('#search-dropdown-button').html(club_name)
        $.ajax({
            url: url_for.club__user_club_song_status,
            type: "get",
            headers: {'AJAX': 1},
            data: {'club_id': club_id},
            success: function(json) {
                console.log(json);
                $('#songs_per_user_num').val(json.songs_per_user);
                $('#num_songs_already_submitted').val(json.user_songs.length)
                $('#num-songs-submitted-out-of').html('Songs submitted: ' + json.user_songs.length + '/' + json.songs_per_user)
            },
            error: function(json) {
                if(json.redirect) {
                    window.location.href = json.redirect;
                }
            }
        });
    });
}

function video_details(video_id, club_id, callback) {
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + video_id + "&key=AIzaSyDMa7u2uL8MCW2Pcwc3-jp_XDy4_bBIn4A",
        type: "GET",
        success: function(json){
           var base_title = json.items[0].snippet.title;
           var base_artist = json.items[0].snippet.channelTitle;
           spotify_info = askSpotifyPlaylist(base_title,club_id);
           console.log(spotify_info);
           if (spotify_info[0] && spotify_info[1]) {
               return callback(spotify_info[0], spotify_info[1]);
           } else {
               return callback(base_title, base_artist);
           }
        }
    });
}
//function video_details_ask_spotify_callback(name, artist, base_title, base_artist, callback) {
//    if (name && artist) {
//        return callback(name, artist);
//    } else {
//        return callback(base_title, base_artist);
//    }
//}
function search_submit_ask_spotify_callback(name, artist, i, json) {
    var listItems = ""
    var title = json.items[i].snippet.title;
    var artist = json.items[i].snippet.title;
    var thumbnail = json.items[i].snippet.thumbnails.high.url;
    var id = json.items[i].id.videoId;
    if (i % 3 == 0) {
        if(i != 0 && i != json.items.length -1) {
            listItems = listItems + "</div><div class='row'>";
        } else if(i == 0) {
            listItems = "<div class='row'>";
        }
    }
    if(spotify_results[0] && spotify_results[1]) {
        var spotify_icon = "<i class='fab fa-spotify fa-lg' style='color: #008000'></i>";
    } else {
        var spotify_icon = "";
    }
    listItems = listItems + "<div class='col'>"
        + "<div class='card'><a target='_blank' href='https://www.youtube.com/watch?v=" + id + "'><img class='card-img' src='" + thumbnail + "'></a>"
        + "<div class='card-body'><h5 class='card-title'>" + title + "</h5>"
        + "<button type='button' class='btn btn-primary'>Submit</button>" + spotify_icon
        + "<input type='hidden' name='video_id' value='" + id + "'></div></div></div>"
    return listItems
}
