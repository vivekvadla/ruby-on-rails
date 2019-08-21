class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.string :player1
      t.string :player2
      t.string :winner
      t.string :status

      t.timestamps
    end
  end
end
