<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    protected $fillable = [
        'project_name',
        'slug',
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

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($project) {
            $project->slug = Str::slug($project->project_name);
        });

        static::updating(function ($project) {
            $project->slug = Str::slug($project->project_name);
        });
    }
}
