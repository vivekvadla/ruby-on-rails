class AddDefaultValueToScoreAttribute < ActiveRecord::Migration[5.2]
  def change
    change_column :players, :score, default: 0
  end
end
