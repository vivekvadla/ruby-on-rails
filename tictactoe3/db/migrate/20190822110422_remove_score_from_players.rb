class RemoveScoreFromPlayers < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :score, :integer
    add_column :players, :score, :integer, :default => 0
  end
end
