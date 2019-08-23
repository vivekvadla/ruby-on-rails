class AddPlayerRefToScores < ActiveRecord::Migration[5.2]
  def change
    remove_column :scores, :player1, :string
    remove_column :scores, :player2, :string
    add_reference :scores, :player1, foreign_key: {to_table:"players"}
    add_reference :scores, :player2, foreign_key: {to_table:"players"}
  end
end
