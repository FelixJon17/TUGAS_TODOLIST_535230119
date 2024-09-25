$(document).ready(function() {
    // ADD
    $('#todo-form').submit(function(event) {
        event.preventDefault();
        let task = $('#todo-input').val();
        if (task) {
            $('#todo-list').append(`
                <li>
                    <span class="task">${task}</span>
                    <button class="done-btn">Done</button>
                    <button class="delete-btn">Delete</button>
                </li>
            `);
            $('#todo-input').val('');  // Clear
        }
    });

    // Completed
    $('#todo-list').on('click', '.done-btn', function() {
        $(this).parent().toggleClass('completed');  // Menandai tugas sebagai selesai
    });

    // Delete
    $('#todo-list').on('click', '.delete-btn', function() {
        $(this).parent().remove();
    });

    // Filter
    $('.filter-btn').click(function() {
        let filter = $(this).attr('id');
        
        if (filter === 'finished-btn') {
            $('li').hide();
            $('li.completed').show();  // Menampilkan tugas yang selesai
        } else if (filter === 'active-btn') {
            $('li').hide();
            $('li:not(.completed)').show();  // Menampilkan Tugas  yang belum selesai
        } else {
            $('li').show();  // Menampilkan semua tugas
        }
    });
});
