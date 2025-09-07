<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'project_name',
        'client_name',
        'contractor_name',
        'category_of_work',
        'scope_of_work',
        'duration',
        'amount',
    ];

    public function photos()
    {
        return $this->hasMany(ProjectPhoto::class);
    }
}
