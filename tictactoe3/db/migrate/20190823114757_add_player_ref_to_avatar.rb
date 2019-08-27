class AddPlayerRefToAvatar < ActiveRecord::Migration[5.2]
  def change
    add_reference :avatars, :player, foreign_key: {to_table:"players"}
  end
end
