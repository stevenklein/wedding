class CreateAttendees < ActiveRecord::Migration
  def change
    create_table :attendees do |t|
      t.integer :rsvp_id
      t.text :first_name
      t.text :last_name
      t.boolean :attending

      t.timestamps
    end
  end
end
